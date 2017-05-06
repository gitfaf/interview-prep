'use strict';

const reduceArray = (input, callback, initValue) => {
  var total = initValue;
  // calculating len here saves us from side effect of malicious array modification
  for(let i = 0, len = input.length; i < len; i++) {
    total = callback(total, input[i], i, input);
  }
  return total;
}

const reduceObject = (input, callback, initValue) => {
  var total = initValue;
  // calculating keys here saves us from side effect of malicious object modification
  let keys = Object.keys(input);
  let obj = {};
  for(let i = 0, len = keys.length; i < len; i++) {
    obj[keys[i]] = input[keys[i]];
  }
  for(let i = 0, keys = Object.keys(obj), len = keys.length; i < len; i++) {
    total = callback(total, input[keys[i]], keys[i], i, input);
  }
  return total;
}

module.exports = {
  reduceArray,
  reduceObject
};
