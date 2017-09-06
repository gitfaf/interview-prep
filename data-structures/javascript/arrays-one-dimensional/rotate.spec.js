let lib = require('./rotate');

/* NOTE
 * Following will not work, different objects.
 * expect(actual).toBe(expected);
 * */

/* Edge case - Empty array rotation */
describe('empty array rotations', () => {
    it('rotateLeftOnce should return empty array', () => {
        const array = [];
        const actual = lib.rotateLeftOnce(array);
        const expected = [];
        expect(actual.length).toBe(expected.length);
        expect(actual[0]).toBe(undefined);
    });
    it('rotateRightOnce should return empty array', () => {
        const array = [];
        const actual = lib.rotateRightOnce(array);
        const expected = [];
        expect(actual.length).toBe(expected.length);
        expect(actual[0]).toBe(undefined);
    });
});

describe('rotating arrays to the left', () => {  
    describe('rotating once', () => {
        it('rotates array once successfully', () => {
            const array = [1, 2, 3, 4, 5];
            const actual = lib.rotateLeftOnce(array);
            const expected = [2, 3, 4, 5, 1];
            expect(actual.length).toBe(expected.length);

            for (let i = 0; i < actual.length; i++) {
                // This loop tests that 
                // every element in actual
                // is equal to 
                // every element in expected.
                expect(actual[i]).toBe(expected[i]);
            }
        });
        it('rotates array twice successfully', () => {
            const array = [1, 2, 3, 4, 5];
            const actual = lib.rotateLeftOnce(lib.rotateLeftOnce(array));
            const expected = [3, 4, 5, 1, 2];
            /* This will not work, different objects.
            expect(actual).toBe(expected); */

            expect(actual.length).toBe(expected.length);

            for (let i = 0; i < actual.length; i++) {
                // This loop tests that 
                // every element in actual
                // is equal to 
                // every element in expected.
                expect(actual[i]).toBe(expected[i]);
            }
        });
    });
    describe('rotating with cardinal number', () => {
        it('rotateLeft by default rotates once', () => {
            const array = [1, 2, 3, 4, 5];
            const actual = lib.rotateLeft(array);
            const expected = [2, 3, 4, 5, 1];
            /* This will not work, different objects.
            expect(actual).toBe(expected); */

            expect(actual.length).toBe(expected.length);

            for (let i = 0; i < actual.length; i++) {
                // This loop tests that 
                // every element in actual
                // is equal to 
                // every element in expected.
                expect(actual[i]).toBe(expected[i]);
            }
        });
        it('rotates array thrice successfully', () => {
            const array = [1, 2, 3, 4, 5];
            const actual = lib.rotateLeft(array, 3);
            const expected = [4, 5, 1, 2, 3];
            /* This will not work, different objects.
            expect(actual).toBe(expected); */

            expect(actual.length).toBe(expected.length);

            for (let i = 0; i < actual.length; i++) {
                // This loop tests that 
                // every element in actual
                // is equal to 
                // every element in expected.
                expect(actual[i]).toBe(expected[i]);
            }
        });
    });
});

describe('rotating arrays to the right', () => {
    describe('rotating once', () => {
        it('rotates array once successfully', () => {
            const array = [1, 2, 3, 4, 5];
            const actual = lib.rotateRightOnce(array);
            const expected = [5, 1, 2, 3, 4];
            /* This will not work, different objects.
            expect(actual).toBe(expected); */

            expect(actual.length).toBe(expected.length);

            for (let i = 0; i < actual.length; i++) {
                // This loop tests that 
                // every element in actual
                // is equal to 
                // every element in expected.
                expect(actual[i]).toBe(expected[i]);
            }
        });
        it('rotates array twice successfully', () => {
            const array = [1, 2, 3, 4, 5];
            const actual = lib.rotateRightOnce(lib.rotateRightOnce(array));
            const expected = [4, 5, 1, 2, 3];
            /* This will not work, different objects.
            expect(actual).toBe(expected); */

            expect(actual.length).toBe(expected.length);

            for (let i = 0; i < actual.length; i++) {
                // This loop tests that 
                // every element in actual
                // is equal to 
                // every element in expected.
                expect(actual[i]).toBe(expected[i]);
            }
        });
    });
    describe('rotating with cardinal number', () => {
        it('rotateRight by default rotates once', () => {
            const array = [1, 2, 3, 4, 5];
            const actual = lib.rotateRight(array);
            const expected = [5, 1, 2, 3, 4];
            /* This will not work, different objects.
            expect(actual).toBe(expected); */

            expect(actual.length).toBe(expected.length);

            for (let i = 0; i < actual.length; i++) {
                // This loop tests that 
                // every element in actual
                // is equal to 
                // every element in expected.
                expect(actual[i]).toBe(expected[i]);
            }
        });
        it('rotates array thrice successfully', () => {
            const array = [1, 2, 3, 4, 5];
            const actual = lib.rotateRight(array, 3);
            const expected = [3, 4, 5, 1, 2];
            /* This will not work, different objects.
            expect(actual).toBe(expected); */

            expect(actual.length).toBe(expected.length);

            for (let i = 0; i < actual.length; i++) {
                // This loop tests that 
                // every element in actual
                // is equal to 
                // every element in expected.
                expect(actual[i]).toBe(expected[i]);
            }
        });
    });
});
