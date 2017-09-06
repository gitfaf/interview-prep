'use strict';

/* NOTE
 * Following takes a remainder since,
 * rotating length times will get us same array thus,
 * Removes extra rotations:
 * times = times % array.length;
 * */


/** PUBLIC fn
 * rotates array left once
 * @param {Array} array - Array to be rotated.
 * @returns {Array} - Returns once left-rotated array 
 */
function rotateLeftOnce(array) {
    if (array && array.length > 1) {
        let tmp = array.shift();
        array.push(tmp);
    }
    return array;
}

/** PUBLIC fn
 * rotates array right once
 * @param {Array} array - Array to be rotated.
 * @returns {Array} - Returns once right-rotated array 
 */
function rotateRightOnce(array) {
    if (array && array.length > 1) {
        let tmp = array.pop();
        array.unshift(tmp);
    }
    return array;
}

/** PRIVATE FN
 * rotate an array, n times, as per rotation logic.
 * @example rotate([1, 2, 3, 4], 2, rotateLeftOnce);
 * @param {Array} array - The array to rotate
 * @param {Number} times - Number of times it should be rotated.
 * @param {Function} rotation - Logic, how to rotate.
 * @returns {Array} {times} rotated.
 */
function rotate(array, times, rotation) {
    let len = array.length;
    // Remove extra rotations.
    times = times % len;
    // loop through single rotation <times> times
    for (let i = 0; i < times; i++) {
        array = rotation(array);
    }
    return array;
}

/** PUBLIC fn
 * Left rotates array a number of times
 * Works only when times > 0 and array.length > 1
 * @param {Array} array - Array to be rotated.
 * @param {Number} times - Number of times array should be rotated; default = 1
 * @returns {Array} - Returns times left-rotated array 
 */
function rotateLeft(array, times = 1) {
    return times > 0 && array.length > 1 ? rotate(array, times, rotateLeftOnce) : array;
}

/** PUBLIC fn
 * Right rotates array a number of times
 * Works only when times > 0 and array.length > 1
 * @param {Array} array - Array to be rotated.
 * @param {Number} times - Number of times array should be rotated; default = 1
 * @returns {Array} - Returns times right-rotated array 
 */
function rotateRight(array, times = 1) {
    return times > 0 && array.length > 1 ? rotate(array, times, rotateRightOnce) : array;
}

module.exports = {
    rotateLeftOnce,
    rotateLeft,
    rotateRightOnce,
    rotateRight
};
