'use strict';

/* NOTE
 * Following takes a remainder since,
 * rotating length times will get us same array thus,
 * Removes extra rotations:
 * times = times % array.length;
 * */

/**
 * PRIVATE fn
 * @async @function
 * @param {Array} array - Array to be rotated by block swap
 * @param {Number} blockSize - The size of the block; should be less than length of array.
 * @example blockSwapLeft([1, 2, 3, 4, 5], 3) returns [4, 5, 1, 2, 3]
 * @returns {Array} - Rotated array.
 */
async function blockSwapLeft(array, blockSize) {
    let len = array.length;
    let left = array.splice(0, blockSize);
    array.push(...left);
    return array;
}

/**
 * PRIVATE fn
 * @async @function
 * @param {Array} array - Array to be rotated by block swap
 * @param {Number} blockSize - The size of the block; should be less than length of array.
 * @example blockSwapRight([1, 2, 3, 4, 5], 3) returns [3, 4, 5, 1, 2]
 * @returns {Array} - Rotated array.
 */
async function blockSwapRight(array, blockSize) {
    let len = array.length;
    let right = array.splice(len - blockSize, blockSize);
    array.unshift(...right);
    return array;
}

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
 * @async @deprecated @function
 * rotate an array, n times, as per rotation logic.
 * @example rotate([1, 2, 3, 4, 5], 2, rotateLeftOnce); returns [3, 4, 5, 1, 2]
 * @example rotate([1, 2, 3, 4, 5], 2, rotateRightOnce); returns [4, 5, 1, 2, 3]
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
 * @async
 * Left rotates array a number of times
 * Works only when times > 0 and array.length > 1
 * @param {Array} array - Array to be rotated.
 * @param {Number} times - Number of times array should be rotated; default = 1
 * @returns {Array} - Returns times left-rotated array 
 */
async function rotateLeft(array, times = 1) {
    return times > 0 && array.length > 1 ? await blockSwapLeft(array, times) : array;
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
    return times > 0 && array.length > 1 ? await blockSwapRight(array, times) : array;
}

/**
 * @async @function degreeOfRotation find the rotation count of an array
 * @param {Array} array rotated array
 * @returns {Number} degree/times input array was rotated
 */
async function degreeOfRotation(array) {
    if (!array || array.length <= 2) {
        return 0;
    }
    let i = 0;
    let len = array.length;
    let a = array[0];
    let b = array[1];
    if (a < b) {
        while (a < b) {
            a = array[i];
            b = array[i + 1];
            i++;
        }
    } else if (a > b) {
        while (a > b) {
            a = array[i];
            b = array[i + 1];
            i++;
        }
    }
    i = i > len / 2 ? len - i : i;
    return i % len;
}

module.exports = {
    rotateLeftOnce,
    rotateLeft,
    rotateRightOnce,
    rotateRight,
    degreeOfRotation
};
