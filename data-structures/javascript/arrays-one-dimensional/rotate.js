'use strict';

function rotateLeftOnce(array) {
    let tmp = array.shift();
    array.push(tmp);
    return array;
}

function rotateLeft(array, times = 1) {
    for (let i = 0; i < times; i++) {
        array = rotateLeftOnce(array);
    }
    return array;
}

function rotateRightOnce(array) {
    let tmp = array.pop();
    array.unshift(tmp);
    return array;
}

function rotateRight(array, times = 1) {
    for (let i = 0; i < times; i++) {
        array = rotateRightOnce(array);
    }
    return array;
}

module.exports = {
    rotateLeftOnce,
    rotateLeft,
    rotateRightOnce,
    rotateRight
};
