'use strict';

const indexOf = require('./indexOf');

describe('indexOf', () => {
    const firstTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const wierdTen = [null, undefined, , false, true, NaN, +Infinity, -Infinity, '', 0];
    describe('returns valid index', () => {
        it('for a number', () => {
            expect(indexOf(firstTen, 3)).toBe(3);
        });
        it('for NaN', () => {
            expect(indexOf(wierdTen, NaN)).toBe(5);
        });
        it('for undefined', () => {
            expect(indexOf(wierdTen, undefined)).toBe(1);
        });
        it('for false', () => {
            expect(indexOf(wierdTen, false)).toBe(3);
        });
        it('for true', () => {
            expect(indexOf(wierdTen, true)).toBe(4);
        });
        it('for +Infinity', () => {
            expect(indexOf(wierdTen, +Infinity)).toBe(6);
        });
        it('for -Infinity', () => {
            expect(indexOf(wierdTen, -Infinity)).toBe(7);
        });
    });
    describe('returns invalid index', () => {
        it('for a number', () => {
            expect(indexOf(firstTen, 30)).toBe(-1);
        });
        it('for a number', () => {
            expect(indexOf(wierdTen, 30)).toBe(-1);
        });
    });
});
