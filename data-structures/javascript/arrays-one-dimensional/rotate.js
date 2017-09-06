'use strict';

/* NOTE
 * Following takes a remainder since,
 * rotating length times will get us same array thus,
 * Removes extra rotations:
 * times = times % array.length;
 * */


/** PUBLIC fn
 * rotates array left once
 * @example
 * rotateLeftOnce([1, 2, 3, 4, 5]) === [2, 3, 4, 5, 1]
 * @example
 * rotateLeftOnce([]) === []
 * @param {Array} array - Array to be rotated.
 * @returns {Array} - Returns once left-rotated array 
 * @async
 */
async function rotateLeftOnce(array) {
    if (array && array.length > 1) {
        let tmp = array.shift();
        array.push(tmp);
    }
    return array;
}

/** PUBLIC fn
 * rotates array right once
 * @example rotateRightOnce([1, 2, 3, 4, 5]) === [5, 1, 2, 3, 4]
 * @example rotateRightOnce([]) === []
 * @param {Array} array - Array to be rotated.
 * @returns {Array} - Returns once right-rotated array 
 * @async
 */
async function rotateRightOnce(array) {
    if (array && array.length > 1) {
        let tmp = array.pop();
        array.unshift(tmp);
    }
    return array;
}

/** PRIVATE FN
 * rotate an array, n times, as per rotation logic.
 * @example rotate([1, 2, 3, 4, 5], 2, rotateLeftOnce); returns [3, 4, 5, 1, 2]
 * @example rotate([1, 2, 3, 4, 5], 2, rotateRightOnce); returns [4, 5, 1, 2, 3]
 * @async
 * @param {Array} array - The array to rotate
 * @param {Number} times - Number of times it should be rotated.
 * @param {Function} rotation - Logic, how to rotate.
 * @returns {Array} {times} rotated.
 */
async function rotate(array, times, rotation) {
    let len = array.length;
    // Remove extra rotations.
    times = times % len;
    // loop through single rotation <times> times
    for (let i = 0; i < times; i++) {
        array = await rotation(array);
    }
    return array;
}

/** PUBLIC fn
 * Left rotates array a number of times
 * Works only when times > 0 and array.length > 1
 * @param {Array} array - Array to be rotated.
 * @param {Number} times - Number of times array should be rotated; default = 1
 * @returns {Array} - Returns times left-rotated array 
 * @async
 */
async function rotateLeft(array, times = 1) {
    return times > 0 && array.length > 1 ? await rotate(array, times, rotateLeftOnce) : array;
}

/** PUBLIC fn
 * Right rotates array a number of times
 * Works only when times > 0 and array.length > 1
 * @param {Array} array - Array to be rotated.
 * @param {Number} times - Number of times array should be rotated; default = 1
 * @returns {Array} - Returns times right-rotated array 
 * @async
 */
async function rotateRight(array, times = 1) {
    return times > 0 && array.length > 1 ? await rotate(array, times, rotateRightOnce) : array;
}

module.exports = {
    rotateLeftOnce,
    rotateLeft,
    rotateRightOnce,
    rotateRight
};
