function sort(arr) {
    const resultArray = [...arr]
    for (let outer = 0; outer < resultArray.length; outer++) {
        let outerEl = resultArray[outer]
        for (let inner = outer + 1; inner < resultArray.length; inner++) {
            let innerEl = resultArray[inner]
            if (outerEl > innerEl) {
                resultArray[outer] = innerEl;
                resultArray[inner] = outerEl
                outerEl = resultArray[outer]
                innerEl = resultArray[inner]
            }
        }
    }
    return resultArray
}

const sortedArray = sort([2, 10, 6, 3, 21])

console.log(sortedArray)