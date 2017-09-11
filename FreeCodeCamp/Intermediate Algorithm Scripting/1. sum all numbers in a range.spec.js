const sumAll = require('./1. sum all numbers in a range')

describe('sumAll', () => {
    it('returns an integer when params are passed.', () => {
        let expected = 10
        let actual = sumAll([1, 4])
        expect(actual).toBe(expected)
    })
    it('returns 10 for a range of 1 to 4.', () => {
        let expected = 10
        let actual = sumAll([1, 4])
        expect(actual).toBe(expected)
    })
    it('returns 10 for a range of 4 to 1.', () => {
        let expected = 10
        let actual = sumAll([4, 1])
        expect(actual).toBe(expected)
    })
    it('returns 45 for a range of 5 to 10.', () => {
        let expected = 45
        let actual = sumAll([5, 10])
        expect(actual).toBe(expected)
    })
    it('returns 45 for a range of 10 to 5.', () => {
        let expected = 45
        let actual = sumAll([10, 5])
        expect(actual).toBe(expected)
    })
    
    describe('passing more than two numbers in array', () => {
        it('works with [1, 2, 3, 4] and returns 10', () => {
            let expected = 10
            let actual = sumAll([1, 2, 3, 4])
            expect(actual).toBe(expected)
        })
        it('works with [10, 9, 0, 3, 4] and returns 55', () => {
            let expected = 55
            let actual = sumAll([10, 9, 0, 3, 4])
            expect(actual).toBe(expected)
        })
    })
})

