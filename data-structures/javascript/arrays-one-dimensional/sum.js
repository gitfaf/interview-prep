const sum = input => input.reduce((accumulated, current, index, array) => accumulated + current, 0);
const sumEvenNumbers = input => input.reduce((accumulated, current, index, array) => current % 2 === 0 ? accumulated + current : accumulated, 0);
const sumOddIndex = input => sum(input.filter((current, index, array) => index % 2 === 1));
const sumEvenIndex = input => sum(input.filter((current, index, array) => index % 2 === 0));

module.exports = {
  sum,
  sumEvenNumbers,
  sumOddIndex,
  sumEvenIndex
};