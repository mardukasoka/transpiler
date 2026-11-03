program loops
  implicit none
  integer :: i, total
  logical :: big
  total = 0
  do i = 1, 10
    total = total + i
  end do
  if (total > 50) then
    big = .true.
    print *, 'big', total
  else
    big = .false.
    print *, 'small'
  end if
end program loops
