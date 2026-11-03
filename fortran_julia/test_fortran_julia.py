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
