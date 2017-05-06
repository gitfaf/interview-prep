'use strict';

const splitArrayInPairs = (input, size) => {
  let paired = [];
  for(let i = 0, len = input.length; i < len; i += size) {
    paired.push(input.splice(0, size));
  }
  return paired;
}

const reversePair = (input, size) => {
  if(input.length <= 0) {
    return undefined;
  }
  if(size < 0) {
    return undefined;
  }
  if(size === 0) {
    return input;
  }
  if(size === 1) {
    return input.reverse();
  }
  if(input.some(i => !Number.isInteger(i))) {
    return undefined;
  }
  var splitted = splitArrayInPairs(input, size);
  var pairWiseReversed = splitted.map(pair => pair.reverse());
  return pairWiseReversed.join().split(',').map(Number);
};

const sortPair = (input, size) => {
  if(input.length <= 0) {
    return undefined;
  }
  if(size < 0) {
    return undefined;
  }
  if(size === 0) {
    return input;
  }
  if(size === 1) {
    return input.reverse();
  }
  if(input.some(i => !Number.isInteger(i))) {
    return undefined;
  }
  var splitted = splitArrayInPairs(input, size);
  var pairWiseSorted = splitted.map(pair => pair.sort((first, second) => second - first));
  return pairWiseSorted.join().split(',').map(Number);
};
module.exports = {
  reversePair,
  sortPair
};
