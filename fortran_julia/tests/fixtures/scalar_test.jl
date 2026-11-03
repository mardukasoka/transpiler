function main()
    # program scalar_test
    # implicit none
    x::Float32 = Float32(0.0f0)
    y::Float32 = Float32(0.0f0)
    result::Float32 = Float32(0.0f0)
    x = 3.0
    y = 4.0
    result = 0.0
    if x > 2.0
        result = result + x
    end
    if y > 2.0
        result = result + y
    end
    println(result)
end

main()
