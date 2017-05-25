'use strict';

const lastIndexOf = require('./lastIndexOf');

describe('lastIndexOf', () => {
    const firstTen = [0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];
    const wierdTen = [null, undefined, , false, true, NaN, +Infinity, -Infinity, '', 0];
    describe('returns valid index', () => {
        it('for a number', () => {
            expect(lastIndexOf(firstTen, 3)).toBe(6);
            expect(lastIndexOf(firstTen, 4)).toBe(7);
        });
        it('for NaN', () => {
            expect(lastIndexOf(wierdTen, NaN)).toBe(5);
        });
        it('for undefined', () => {
            expect(lastIndexOf(wierdTen, undefined)).toBe(2);
        });
        it('for false', () => {
            expect(lastIndexOf(wierdTen, false)).toBe(3);
        });
        it('for true', () => {
            expect(lastIndexOf(wierdTen, true)).toBe(4);
        });
        it('for +Infinity', () => {
            expect(lastIndexOf(wierdTen, +Infinity)).toBe(6);
        });
        it('for -Infinity', () => {
            expect(lastIndexOf(wierdTen, -Infinity)).toBe(7);
        });
    });
    describe('returns invalid index', () => {
        it('for a number', () => {
            expect(lastIndexOf(firstTen, 30)).toBe(-1);
        });
        it('for a number', () => {
            expect(lastIndexOf(wierdTen, 30)).toBe(-1);
        });
    });
});
