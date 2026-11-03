program scalar_test
  implicit none
  real :: x, y, result
  x = 3.0
  y = 4.0
  result = 0.0
  if (x > 2.0) then
    result = result + x
  end if
  if (y > 2.0) then
    result = result + y
  end if
  print *, result
end program scalar_test
