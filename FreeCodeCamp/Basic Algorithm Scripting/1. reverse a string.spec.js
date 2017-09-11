const reverseString = require('./1. reverse a string')

describe('reverseString', () => {
    const input_hello = 'hello'
    const output_hello = 'olleh'
    const input_Howdy = 'Howdy'
    const output_Howdy = 'ydwoH'
    const input_long = 'Greetings from Earth'
    const output_long = 'htraE morf sgniteerG'

    it(`returns a string and reverseString("${input_hello}") === ${output_hello}`, () => {
        const expected = output_hello
        const actual = reverseString(input_hello)
        expect(actual).toBe(expected)
        expect(typeof actual).toBe(typeof expected)
        expect(typeof actual).toBe('string')
    })
    it(`reverseString("${input_Howdy}") === ${output_Howdy}`, () => {
        const expected = output_Howdy
        const actual = reverseString(input_Howdy)
        expect(actual).toBe(expected)
    })
    it(`reverseString("${input_long}") === ${output_long}`, () => {
        const expected = output_long
        const actual = reverseString(input_long)
        expect(actual).toBe(expected)
    })


})
