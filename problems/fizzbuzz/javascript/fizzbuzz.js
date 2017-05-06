const fizz =  number => number % 3 === 0 ? 'Fizz' : '';
const buzz = number => number % 5 === 0 ? 'Buzz' : '';

let logic = () => [fizz, buzz];

const processItem = (i, actions) => {
  var value = actions.reduce(function (prevValue, currentAction) {
    return prevValue + currentAction(i);
  }, '');
  return value.length === 0 ? i : value;
}

function solutionInclusive (start, end) {
  var actions = logic();
  var output = [];
  for(var i = start; i <= end; i++) {
    output.push(processItem(i, actions));
  }
  return output;
}

module.exports = {
  logic,
  processItem,
  solutionInclusive
};
