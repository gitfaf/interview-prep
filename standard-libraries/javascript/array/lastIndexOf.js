'use strict';

const lastIndexOf = (input, value) => {
    for(let i = input.length - 1; i >= 0; i--) {
        if(input[i] === value || (Number.isNaN(value) && Number.isNaN(input[i]))) {
            return i;
        }
    }
    return -1;
}

module.exports = lastIndexOf;
