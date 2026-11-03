program subs
  implicit none
  double precision :: r
  character(len=10) :: name
  name = 'circle'
  r = area(2.0d0)
  print *, name, r
  call show(3)
contains
  function area(rad)
    double precision, intent(in) :: rad
    double precision :: area
    area = 3.14159d0 * rad ** 2
  end function area
  subroutine show(n)
    integer, intent(in) :: n
    integer :: k
    do k = 1, n
      print *, 'k =', k
    end do
  end subroutine show
end program subs
