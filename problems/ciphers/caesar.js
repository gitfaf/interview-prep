'use strict';

const val_a = 'a'.charCodeAt(0);
const val_z = 'z'.charCodeAt(0);
const val_A = 'A'.charCodeAt(0);
const val_Z = 'Z'.charCodeAt(0);

const caesar_lower_letter = (letter, rotateBy) => {
    let newValue = letter.charCodeAt(0) + rotateBy;
    newValue = newValue < val_a ? val_z + 1 - (val_a - newValue) : newValue;
    newValue = newValue > val_z ? val_a - 1 + (newValue - val_z) : newValue;
    return String.fromCharCode(newValue);
};

const caesar_upper_letter = (letter, rotateBy) => {
    let newValue = letter.charCodeAt(0) + rotateBy;
    newValue = newValue < val_A ? val_Z + 1 - (val_A - newValue) : newValue;
    newValue = newValue > val_Z ? val_A - 1 + (newValue - val_Z) : newValue;
    return String.fromCharCode(newValue);
};

const caesar_lower = (sentence, rotateBy) => {
    return sentence.split('').map(k => k >= 'a' && k <= 'z' ? caesar_lower_letter(k, rotateBy) : k).join('');
};

const caesar_upper = (sentence, rotateBy) => {
    return sentence.split('').map(k => k >= 'A' && k <= 'Z' ? caesar_upper_letter(k, rotateBy) : k).join('');
};

const caesar = (sentence, rotateBy) => {
    let out = caesar_lower(sentence, rotateBy);
    out = caesar_upper(out, rotateBy);
    return out;
}
module.exports = {
    caesar_lower,
    caesar_upper,
    caesar
};
