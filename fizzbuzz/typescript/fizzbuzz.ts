function fizz(number: number) : string {
  return number % 3 === 0 ? 'Fizz' : '';
}

function buzz(number: number): string {
  return number % 5 === 0 ? 'Buzz' : '';
}

function process(number: number): string {
  let value:string = '';
  value = fizz(number) + buzz(number);
  value = value.length === 0 ? number.toString() : value;
  return value;
}

function solution() {
  for(let i = 1; i <= 100; i++) {
    console.log(process(i));
  }
}

solution();