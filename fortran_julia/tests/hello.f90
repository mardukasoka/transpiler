program hello
  implicit none
  ! greet and do arithmetic
  integer :: a, b
  real :: x
  a = 7
  b = 2
  x = 2.5
  print *, 'Hello, world!'
  write(*,*) a + b, a - b, a * b, a ** b
  print *, x / 2.0
end program hello
