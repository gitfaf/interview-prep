'use strict';

const indexOf = (input, value) => {
    for(let i = 0, len = input.length; i < len; i++) {
        if(input[i] === value || (Number.isNaN(value) && Number.isNaN(input[i]))) {
            return i;
        }
    }
    return -1;
}

module.exports = indexOf;
