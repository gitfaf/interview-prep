'use strict';

const sum = input => input.reduce((accumulated, current, index, array) => accumulated + current, 0);
// Numbers
const sumOddNumbers = input => input.reduce((accumulated, current, index, array) => current % 2 === 1 ? accumulated + current : accumulated, 0);
const sumEvenNumbers = input => input.reduce((accumulated, current, index, array) => current % 2 === 0 ? accumulated + current : accumulated, 0);
// Index
const sumOddIndex = input => sum(input.filter((current, index, array) => index % 2 === 1));
const sumEvenIndex = input => sum(input.filter((current, index, array) => index % 2 === 0));

module.exports = {
  sum,
  sumEvenNumbers,
  sumOddNumbers,
  sumEvenIndex,
  sumOddIndex
};
