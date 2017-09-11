function range (start, end, step) {
    let r = []
    for(let i = start; i <= end; i += step) {
        r.push(i)
    }
    return r
}

function sumAll(arr) {
    let start = Math.min.apply(null, arr)
    let end = Math.max.apply(null, arr)
    let step = 1
    return range(start, end, step).reduce((accumulator, current) => accumulator + current, 0)
}

module.exports = sumAll
