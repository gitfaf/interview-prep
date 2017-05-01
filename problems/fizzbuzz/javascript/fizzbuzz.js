function fizz (number) {
  return number % 3 === 0 ? 'Fizz' : '';
}

function buzz (number) {
  return number % 5 === 0 ? 'Buzz' : '';
}

function logic () {
  return [fizz, buzz];
}

function solution () {
  var actions = logic();
  for(var i = 1; i <= 100; i++) {
    var output = actions.reduce(function (prevValue, currentAction) {
      return prevValue + currentAction(i);
    }, '');
    output = output.length === 0 ? i : output;
    console.log(output);
  }
}

solution();
