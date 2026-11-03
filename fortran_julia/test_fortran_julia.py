"""Snapshot tests: each tests/<name>.f90 must transpile exactly to tests/<name>.expected.jl."""
import pathlib, subprocess, sys
import pytest
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from fortran_to_julia import transpile

TESTS = pathlib.Path(__file__).parent / "tests"
CASES = sorted(p.stem for p in TESTS.glob("*.f90"))

@pytest.mark.parametrize("name", CASES)
def test_snapshot(name):
    src = (TESTS / f"{name}.f90").read_text()
    assert transpile(src) == (TESTS / f"{name}.expected.jl").read_text()

def test_cli(tmp_path):
    out = tmp_path / "o.jl"
    script = pathlib.Path(__file__).parent / "fortran_to_julia.py"
    subprocess.run([sys.executable, str(script), str(TESTS / "hello.f90"), str(out)], check=True)
    assert 'println("Hello, world!")' in out.read_text()

def test_expressions():
    from fortran_to_julia import expr
    assert expr("a .and. .not. b") == "a && ! b"
    assert expr("x**2 /= 1.5d0") == "x^2 != 1.5e0"

def test_unsupported_construct_raises():
    from fortran_to_julia import UnsupportedConstructError
    with pytest.raises(UnsupportedConstructError) as e:
        transpile("program p\n  implicit none\n  goto 10\nend program p\n")
    assert (e.value.line_number, e.value.column, e.value.construct_name) == (3, 3, "goto")

def test_cli_unsupported_exits_nonzero(tmp_path):
    src = tmp_path / "bad.f90"; src.write_text("program p\n  select case (i)\nend program p\n")
    script = pathlib.Path(__file__).parent / "fortran_to_julia.py"
    r = subprocess.run([sys.executable, str(script), str(src), str(tmp_path / "o.jl")], capture_output=True, text=True)
    assert r.returncode == 1 and "bad.f90:2:3: error: unsupported construct 'select'" in r.stderr
    assert not (tmp_path / "o.jl").exists()

def test_main_wrapper_ordering():
    out = (TESTS / "subs.expected.jl").read_text()
    assert out.index("function area") < out.index("function main()") < out.rindex("main()")
    assert out.rstrip().endswith("main()")
