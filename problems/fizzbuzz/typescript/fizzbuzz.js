function fizz(number) {
    return number % 3 === 0 ? 'Fizz' : '';
}
function buzz(number) {
    return number % 5 === 0 ? 'Buzz' : '';
}
function process(number) {
    var value = '';
    value = fizz(number) + buzz(number);
    value = value.length === 0 ? number.toString() : value;
    return value;
}
function solution() {
    for (var i = 1; i <= 100; i++) {
        console.log(process(i));
    }
}
solution();
