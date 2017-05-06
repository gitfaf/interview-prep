var fizzbuzzLib = require('./fizzbuzz');

describe('fizzbuzz', function () {
  describe('processItem', function () {
    var actions;
    beforeAll(function () {
      actions = fizzbuzzLib.logic();
    });
    it('output is 1 for i = 1', function () {
      var i = 1;
      var actual = fizzbuzzLib.processItem(i, fizzbuzzLib.logic());
      var expected = 1;
      expect(actual).toBe(expected);
    });

    it('output is "Fizz" for i = 3', function () {
      var i = 3;
      var actual = fizzbuzzLib.processItem(i, actions);
      var expected = 'Fizz';
      expect(actual).toBe(expected);
    });
    it('output is "Buzz" for i = 5', function () {
      var i = 5;
      var actual = fizzbuzzLib.processItem(i, actions);
      var expected = 'Buzz';
      expect(actual).toBe(expected);
    });
    it('output is "FizzBuzz" for i = 15', function () {
      var i = 15;
      var actual = fizzbuzzLib.processItem(i, actions);
      var expected = 'FizzBuzz';
      expect(actual).toBe(expected);
    });
  });
});
