# program subs
# implicit none
r = Float64(0.0)
name = ""
name = "circle"
r = area(2.0e0)
println(name, r)
show(3)

function area(rad)
    # argument(s) rad :: Float64
    area::Float64 = Float64(0.0)
    area = 3.14159e0 * rad ^ 2
    return area
end
function show(n)
    # argument(s) n :: Int
    k::Int = Int(0)
    for k in 1:n
        println("k =", k)
    end
end
