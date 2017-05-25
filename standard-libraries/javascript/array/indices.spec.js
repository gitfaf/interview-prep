'use strict';

const indices = require('./indices');

describe('indices', () => {
    const firstTen = [0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];
    const wierdTen = [null, undefined, , false, true, NaN, +Infinity, -Infinity, '', 0];
    describe('returns valid index', () => {
        it('for a number', () => {
            let actual = indices(firstTen, 3);
            let expected = [5, 6];
            expect(actual[0]).toBe(expected[0]);
            expect(actual[1]).toBe(expected[1]);
        });
        it('for NaN', () => {
            let actual = indices(wierdTen, NaN);
            let expected = [5];
            expect(actual[0]).toBe(expected[0]);
        });
        it('for undefined', () => {
            let actual = indices(wierdTen, undefined);
            let expected = [1, 2];
            expect(actual[0]).toBe(expected[0]);
            expect(actual[1]).toBe(expected[1]);
        });
        it('for false', () => {
            let actual = indices(wierdTen, false);
            let expected = [3];
            expect(actual[0]).toBe(expected[0]);
        });
        it('for true', () => {
            let actual = indices(wierdTen, true);
            let expected = [4];
            expect(actual[0]).toBe(expected[0]);
        });
        it('for +Infinity', () => {
            let actual = indices(wierdTen, +Infinity);
            let expected = [6];
            expect(actual[0]).toBe(expected[0]);
        });
        it('for -Infinity', () => {
            let actual = indices(wierdTen, -Infinity);
            let expected = [7];
            expect(actual[0]).toBe(expected[0]);
        });
    });
    describe('returns invalid index', () => {
        it('for a number', () => {
            let actual = indices(firstTen, 30);
            expect(actual.length).toBe(0);
        });
        it('for a number', () => {
            let actual = indices(wierdTen, 30);
            expect(actual.length).toBe(0);
        });
    });
});
