# program loops
# implicit none
i = Int(0)
total = Int(0)
big = false
total = 0
for i in 1:10
    total = total + i
end
if total > 50
    big = true
    println("big", total)
else
    big = false
    println("small")
end
