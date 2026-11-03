function main()
    # program hello
    # implicit none
    # greet and do arithmetic
    a::Int = Int(0)
    b::Int = Int(0)
    x::Float32 = Float32(0.0f0)
    a = 7
    b = 2
    x = 2.5
    println("Hello, world!")
    println(a + b, a - b, a * b, a ^ b)
    println(x / 2.0)
end

main()
