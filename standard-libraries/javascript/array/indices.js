'use strict';

const indices = (input, value) => {
    let out = [];
    for(let i = 0, len = input.length; i < len; i++) {
        if(input[i] === value || (Number.isNaN(value) && Number.isNaN(input[i]))) {
            out.push(i);
        }
    }
    return out;
}

module.exports = indices;
