function getMin(numbers) {
    let currentMin = numbers[0]
    for (const item of numbers) {
        if (item < currentMin) {
            currentMin = item
        }
    }
    return currentMin
}

console.log(getMin([1, 2, 3]))

console.log(getMin([9, 8, 3, 5, 1]))
