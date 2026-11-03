#!/usr/bin/env python3
"""Minimal Fortran (free-form subset) -> Julia transpiler. Python stdlib only.

Usage: python fortran_to_julia.py input.f90 output.jl
Approach: line-based parser with regex statement recognition (iteration 1 baseline).
"""
import re
import sys

TYPE_MAP = {
    "integer": "Int", "real": "Float32", "double precision": "Float64",
    "logical": "Bool", "character": "String",
}
DEFAULTS = {"Int": "0", "Float32": "0.0f0", "Float64": "0.0", "Bool": "false", "String": '""'}
OPS = [(r"\.eq\.", "=="), (r"\.ne\.", "!="), (r"\.lt\.", "<"), (r"\.le\.", "<="),
       (r"\.gt\.", ">"), (r"\.ge\.", ">="), (r"\.and\.", "&&"), (r"\.or\.", "||"),
       (r"\.not\.", "!"), (r"\.true\.", "true"), (r"\.false\.", "false")]
DECL_RE = re.compile(r"^(double\s+precision|integer|real|logical|character)\s*(\([^)]*\)|\*\d+)?\s*(.*)$", re.I)


def split_comment(line):
    """Split a line into (code, comment) honouring string literals."""
    quote = None
    for i, ch in enumerate(line):
        if quote:
            if ch == quote:
                quote = None
        elif ch in "'\"":
            quote = ch
        elif ch == "!":
            return line[:i].rstrip(), line[i + 1:].strip()
    return line.rstrip(), None


def split_args(s):
    """Split on top-level commas (ignores commas inside parens/strings)."""
    out, depth, quote, cur = [], 0, None, ""
    for ch in s:
        if quote:
            quote = None if ch == quote else quote
        elif ch in "'\"":
            quote = ch
        elif ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        elif ch == "," and depth == 0:
            out.append(cur.strip()); cur = ""; continue
        cur += ch
    if cur.strip():
        out.append(cur.strip())
    return out


def expr(e):
    """Translate a Fortran expression to Julia."""
    parts = re.split(r"('(?:[^']|'')*'|\"[^\"]*\")", e)
    res = []
    for p in parts:
        if p.startswith("'"):
            res.append('"' + p[1:-1].replace("''", "'").replace('"', '\\"') + '"')
        elif p.startswith('"'):
            res.append(p)
        else:
            for pat, rep in OPS:
                p = re.sub(pat, rep, p, flags=re.I)
            p = p.replace("**", "^").replace("/=", "!=")
            p = re.sub(r"(\d+\.\d*|\.\d+|\d+)[dD]([+-]?\d+)", r"\1e\2", p)  # 1.0d0 -> 1.0e0
            p = re.sub(r"(\d)_\w+", r"\1", p)  # kind suffixes
            res.append(p)
    return "".join(res).strip()


class UnsupportedConstructError(Exception):
    """Raised when a Fortran construct cannot be translated (never emitted as a silent comment)."""

    def __init__(self, line_number, column, construct_name, message):
        self.line_number, self.column, self.construct_name, self.message = line_number, column, construct_name, message
        super().__init__(f"line {line_number}, column {column}: unsupported construct '{construct_name}': {message}")


class Transpiler:
    """Output order: (1) imports, (2) function/subroutine definitions, (3) main() wrapper, (4) main() call."""

    def __init__(self):
        self.imports, self.funcs, self.body = [], [], []
        self.out, self.depth, self.func_stack = self.body, 0, []
        self.has_program, self.line_no, self.col = False, 0, 1

    def unsupported(self, construct, s):
        raise UnsupportedConstructError(self.line_no, self.col, construct,
                                        f"no Julia translation for statement: {s}")

    def emit(self, text, comment=None):
        pad = "    " * self.depth
        if text and comment:
            self.out.append(f"{pad}{text}  # {comment}")
        elif text:
            self.out.append(pad + text)
        elif comment is not None:
            self.out.append(f"{pad}# {comment}")
        else:
            self.out.append("")

    def translate(self, src):
        # join continuation lines ending in '&'
        lines, buf, start = [], "", None
        for n, raw in enumerate(src.splitlines(), 1):
            code, com = split_comment(raw)
            if start is None:
                start = (n, len(raw) - len(raw.lstrip()) + 1)
            if code.endswith("&"):
                buf += code[:-1].strip() + " "
                continue
            lines.append(((buf + code.strip().lstrip("&").strip()) if buf else code.strip(), com, start))
            buf, start = "", None
        for code, com, (self.line_no, self.col) in lines:
            self.stmt(code, com)
        if self.func_stack:
            raise UnsupportedConstructError(self.line_no, self.col, "unterminated block",
                                            f"missing END for {self.func_stack[-1][0]}")
        out = list(self.imports)
        if self.funcs:
            out += self.funcs + [""]
        if self.has_program:
            out += ["function main()"] + self.body + ["end", "", "main()"]
        else:
            out += self.body
        return "\n".join(out).strip("\n") + "\n"

    def stmt(self, s, com):
        low = s.lower()
        if not s:
            return self.emit("", com)
        if low == "implicit none":
            return self.emit("", "implicit none" + (f" -- {com}" if com else ""))
        if low == "contains":
            return self.emit("", com)
        m = re.match(r"^program\s+(\w+)", s, re.I)
        if m:
            self.func_stack.append(("program", None))
            self.has_program, self.out, self.depth = True, self.body, 1
            return self.emit(f"# program {m.group(1)}", com)
        m = re.match(r"^((?:(?:integer|real|logical|double\s+precision|character|recursive|pure|elemental)\s+)*)"
                     r"(subroutine|function)\s+(\w+)\s*(?:\(([^)]*)\))?\s*(?:result\s*\(\s*(\w+)\s*\))?", s, re.I)
        if m and not low.startswith("end"):
            kind, name = m.group(2).lower(), m.group(3)
            args = [a.strip() for a in (m.group(4) or "").split(",") if a.strip()]
            result = m.group(5) or (name if kind == "function" else None)
            self.func_stack.append((kind, result, self.out, self.depth))
            self.out, self.depth = self.funcs, 0
            self.emit(f"function {name}({', '.join(args)})", com)
            self.depth += 1
            return
        if re.match(r"^end\s*(program|subroutine|function)\b", low) or low == "end":
            if not self.func_stack:
                self.unsupported("END without matching block", s)
            frame = self.func_stack.pop()
            kind, result = frame[0], frame[1]
            if kind == "function":
                self.emit(f"return {result}")
            if kind != "program":
                self.depth -= 1
                self.emit("end", com)
                self.out, self.depth = frame[2], frame[3]
            elif com:
                self.emit("", com)
            return
        m = DECL_RE.match(s)
        if m and (("::" in s) or re.match(r"^[a-z_]\w*(\s*[,=(]|\s*$)", m.group(3), re.I)):
            return self.decl(m, com)
        m = re.match(r"^do\s+(\w+)\s*=\s*(.+)$", s, re.I)
        if m:
            b = split_args(m.group(2))
            rng = f"{expr(b[0])}:{expr(b[1])}" if len(b) == 2 else f"{expr(b[0])}:{expr(b[2])}:{expr(b[1])}"
            self.emit(f"for {m.group(1)} in {rng}", com); self.depth += 1
            return
        m = re.match(r"^do\s+while\s*\((.*)\)$", s, re.I)
        if m:
            self.emit(f"while {expr(m.group(1))}", com); self.depth += 1
            return
        if re.match(r"^end\s*(do|if)$", low):
            self.depth -= 1
            return self.emit("end", com)
        m = re.match(r"^if\s*\((.*)\)\s*then$", s, re.I)
        if m:
            self.emit(f"if {expr(m.group(1))}", com); self.depth += 1
            return
        m = re.match(r"^else\s*if\s*\((.*)\)\s*then$", s, re.I)
        if m:
            self.depth -= 1; self.emit(f"elseif {expr(m.group(1))}", com); self.depth += 1
            return
        if low == "else":
            self.depth -= 1; self.emit("else", com); self.depth += 1
            return
        m = re.match(r"^if\s*\((.*?)\)\s*(\S.*)$", s, re.I)
        if m and self._balanced(m.group(1)):  # one-line logical IF
            self.emit(f"if {expr(m.group(1))}", com); self.depth += 1
            self.stmt(m.group(2), None); self.depth -= 1
            return self.emit("end")
        m = re.match(r"^(?:print\s*\*\s*,?|write\s*\(\s*\*\s*,\s*\*\s*\))\s*(.*)$", s, re.I)
        if m:
            items = [expr(a) for a in split_args(m.group(1))]
            return self.emit(f"println({', '.join(items)})", com)
        m = re.match(r"^call\s+(\w+)\s*(\(.*\))?$", s, re.I)
        if m:
            return self.emit(f"{m.group(1)}{expr(m.group(2) or '()')}", com)
        if low in ("exit", "cycle", "return", "stop"):
            mapped = {"exit": "break", "cycle": "continue", "return": "return", "stop": "exit()"}[low]
            return self.emit(mapped, com)
        m = re.match(r"^(\w+(?:\s*\([^=]*\))?)\s*=\s*(.+)$", s)
        if m:
            return self.emit(f"{expr(m.group(1))} = {expr(m.group(2))}", com)
        self.unsupported(s.split("(")[0].split()[0].lower() if s.split() else s, s)

    @staticmethod
    def _balanced(s):
        return s.count("(") == s.count(")")

    def decl(self, m, com):
        jtype = TYPE_MAP[re.sub(r"\s+", " ", m.group(1).lower())]
        rest = m.group(3)
        attrs = ""
        if "::" in rest:
            attrs, rest = rest.split("::", 1)
        attrs = attrs.lower()
        if "intent" in attrs:  # dummy arguments: no local declaration needed
            return self.emit("", f"argument(s) {rest.strip()} :: {jtype}") if com is None else self.emit("", com)
        const = "parameter" in attrs
        for v in split_args(rest):
            if "=" in v:
                name, val = (x.strip() for x in v.split("=", 1))
                val = expr(val)
            else:
                name, val = v.strip(), DEFAULTS[jtype]
            dims = re.match(r"^(\w+)\s*\((.*)\)$", name)
            if dims:
                shape = ", ".join(expr(d) for d in split_args(dims.group(2)))
                self.emit(f"{dims.group(1)} = zeros({jtype}, {shape})", com)
            else:
                cast = val if jtype in ("Bool", "String") else f"{jtype}({val})"
                self.emit(f"{'const ' if const and self.depth == 0 else ''}{name}::{jtype} = {cast}"
                          if self.depth else f"{'const ' if const else ''}{name} = {cast}", com)
            com = None


def transpile(src):
    return Transpiler().translate(src)


def main(argv):
    if len(argv) != 3:
        print("usage: python fortran_to_julia.py input.f90 output.jl", file=sys.stderr)
        return 2
    with open(argv[1]) as f:
        src = f.read()
    try:
        result = transpile(src)
    except UnsupportedConstructError as e:
        print(f"{argv[1]}:{e.line_number}:{e.column}: error: unsupported construct "
              f"'{e.construct_name}': {e.message}", file=sys.stderr)
        return 1
    with open(argv[2], "w") as f:
        f.write(result)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
