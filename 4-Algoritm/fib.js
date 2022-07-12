function fib(n) {

    // build

    const numbers = [1, 1]

    for (let i = 2; i < n + 1; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1])
    }

    // return 

    return numbers[n]
}
console.log(fib(4))