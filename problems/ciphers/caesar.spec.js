const lib = require('./caesar');

describe('caesar cipher', () => {
    describe('for lower characters', () => {
        it('works well when rotated with +1', () => {
            var input = 'abcdefghijklmnopqrstuvwxyz';
            var expected = 'bcdefghijklmnopqrstuvwxyza';
            var actual = lib.caesar_lower(input, 1);
            expect(actual).toBe(expected);
        });
        it('works well when rotated with -1', () => {
            var input = 'abcdefghijklmnopqrstuvwxyz';
            var expected = 'zabcdefghijklmnopqrstuvwxy';
            var actual = lib.caesar_lower(input, -1);
            expect(actual).toBe(expected);
        }); 
    });

    describe('for upper characters', () => {
        it('works well when rotated with +1', () => {
            var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var expected = 'BCDEFGHIJKLMNOPQRSTUVWXYZA';
            var actual = lib.caesar_upper(input, 1);
            expect(actual).toBe(expected);
        });
        it('works well when rotated with -1', () => {
            var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var expected = 'ZABCDEFGHIJKLMNOPQRSTUVWXY';
            var actual = lib.caesar_upper(input, -1);
            expect(actual).toBe(expected);
        });
    });
    
    describe('for any cased letters', () => {
        it('works well when rotated with +1', () => {
            var input = 'abcdefghijklmnopqrstuvwxyz';
            var expected = 'bcdefghijklmnopqrstuvwxyza';
            var actual = lib.caesar(input, 1);
            expect(actual).toBe(expected);
        });
        it('works well when rotated with -1', () => {
            var input = 'abcdefghijklmnopqrstuvwxyz';
            var expected = 'zabcdefghijklmnopqrstuvwxy';
            var actual = lib.caesar(input, -1);
            expect(actual).toBe(expected);
        }); 
        it('works well when rotated with +1', () => {
            var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var expected = 'BCDEFGHIJKLMNOPQRSTUVWXYZA';
            var actual = lib.caesar(input, 1);
            expect(actual).toBe(expected);
        });
        it('works well when rotated with -1', () => {
            var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var expected = 'ZABCDEFGHIJKLMNOPQRSTUVWXY';
            var actual = lib.caesar(input, -1);
            expect(actual).toBe(expected);
        });
        it('works well when rotated with +1', () => {
            var input = 'abcdefghijklmNOPQRSTUVWXYZ';
            var expected = 'bcdefghijklmnOPQRSTUVWXYZA';
            var actual = lib.caesar(input, 1);
            expect(actual).toBe(expected);
        });
        it('works well when rotated with -1', () => {
            var input = 'ABCDEFGHIJKLMnopqrstuvwxyz';
            var expected = 'ZABCDEFGHIJKLmnopqrstuvwxy';
            var actual = lib.caesar(input, -1);
            expect(actual).toBe(expected);
        });
    });
});
