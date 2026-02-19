
const flatArr = (arr, level = Infinity) => {
    let res = [];
    // let depth = 0
    // const flatten = (arr) => {
    //     arr.forEach((value) => {
    //         if (Array.isArray(value) && depth < level) {
    //             depth += 1
    //             flatten(value)
    //         } else {
    //             res.push(value)
    //             depth = 0
    //         }
    //     })
    // }
    // flatten(arr)

    const flatten = (arr, currentDepth) => {
        for (let val of arr) {
            if (Array.isArray(val) && currentDepth < level) {
                flatten(val, currentDepth + 1)
            } else {
                res.push(val)
            }
        }
    }
    flatten(arr, 0)
    return res
}

console.log(flatArr([1, [2], 3, [[4, 6], 5]], 4))