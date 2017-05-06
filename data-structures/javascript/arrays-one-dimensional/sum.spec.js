var sumLib = require('./sum');

describe('sum of an array', function () {

  describe('sum()', function() {
    it('is 0 for empty array', function () {
      var input = [];
      var actual = sumLib.sum(input);
      var expected = 0;
      expect(actual).toBe(expected);
    });
    it('is equal to first element for single element array', function () {
      var input = [ 1 ];
      var actual = sumLib.sum(input);
      var expected = input[0];
      expect(actual).toBe(expected);
    });
  });
  
  describe('sumOddNumbers()', function() {
    it('is 0 for empty array', function () {
      var input = [];
      var actual = sumLib.sumOddNumbers(input);
      var expected = 0;
      expect(actual).toBe(expected);
    });
    it('is equal to 0 for even only elements array', function () {
      var input = [ 0, 2, 4, 6, 8, 10 ];
      var actual = sumLib.sumOddNumbers(input);
      var expected = 0;
      expect(actual).toBe(expected);
    });
    it('is equal to sum-of-array for odd only elements array', function () {
      var input = [ 1, 3, 5, 7, 9 ];
      var actual = sumLib.sumOddNumbers(input);
      var expected = sumLib.sum(input); // assume external library
      expect(actual).toBe(expected);
    });
    it('is equal to 25 for positive single-digit odd-numbers only elements array', function () {
      var input = [ 1, 3, 5, 7, 9 ];
      var actual = sumLib.sumOddNumbers(input);
      var expected = 25;
      expect(actual).toBe(expected);
    });
    it('is equal to 25 for non-negative single-digit numbers only elements array', function () {
      var input = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
      var actual = sumLib.sumOddNumbers(input);
      var expected = 25;
      expect(actual).toBe(expected);
    });
  });

  describe('sumEvenNumbers()', function() {
    it('is 0 for empty array', function () {
      var input = [];
      var actual = sumLib.sumEvenNumbers(input);
      var expected = 0;
      expect(actual).toBe(expected);
    });
    it('is equal to 0 for odd only elements array', function () {
      var input = [ 1, 3, 5, 7, 9 ];
      var actual = sumLib.sumEvenNumbers(input);
      var expected = 0;
      expect(actual).toBe(expected);
    });
    it('is equal to sum-of-array for even only elements array', function () {
      var input = [ 0, 2, 4, 6, 8, 10 ];
      var actual = sumLib.sumEvenNumbers(input);
      var expected = sumLib.sum(input); // assume external library
      expect(actual).toBe(expected);
    });
    it('is equal to 20 for positive single-digit even-numbers only elements array', function () {
      var input = [ 2, 4, 6, 8 ];
      var actual = sumLib.sumEvenNumbers(input);
      var expected = 20;
      expect(actual).toBe(expected);
    });
    it('is equal to 20 for non-negative single-digit numbers only elements array', function () {
      var input = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
      var actual = sumLib.sumEvenNumbers(input);
      var expected = 20;
      expect(actual).toBe(expected);
    });
  });

  describe('sumOddIndex()', function () {
    it('is 0 for empty array', function () {
      var input = [];
      var actual = sumLib.sumOddIndex(input);
      var expected = 0;
      expect(actual).toBe(expected);
    });
    it('is equal to 0 for single element array', function () {
      var input = [ 0 ];
      var actual = sumLib.sumOddIndex(input);
      var expected = 0;
      expect(actual).toBe(expected);
    });
    it('is equal to second element for two-element array', function () {
      var input = [ 0, 1 ];
      var actual = sumLib.sumOddIndex(input);
      var expected = input[1];
      expect(actual).toBe(expected);
    });
    it('is equal to second element for three-element array', function () {
      var input = [ 0, 1, 2 ];
      var actual = sumLib.sumOddIndex(input);
      var expected = input[1];
      expect(actual).toBe(expected);
    });
    it('is equal to second+fourth element for four-element array', function () {
      var input = [ 0, 1, 2, 3 ];
      var actual = sumLib.sumOddIndex(input);
      var expected = input[1] + input[3];
      expect(actual).toBe(expected);
    });
    it('is equal to sum of all the odd indices', function () {
      var input = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
      var expectedArray = [ 1, 3, 5, 7, 9 ];
      var actual = sumLib.sumOddIndex(input);
      var expected = sumLib.sum(expectedArray); // assume external library
      expect(actual).toBe(expected);
    });
  });
  
  describe('sumEvenIndex()', function () {
    it('is 0 for empty array', function () {
      var input = [];
      var actual = sumLib.sumEvenIndex(input);
      var expected = 0;
      expect(actual).toBe(expected);
    });
    it('is equal to first element for single element array', function () {
      var input = [ 0 ];
      var actual = sumLib.sumEvenIndex(input);
      var expected = input[0];
      expect(actual).toBe(expected);
    });
    it('is equal to first element for two-element array', function () {
      var input = [ 0, 1 ];
      var actual = sumLib.sumEvenIndex(input);
      var expected = input[0];
      expect(actual).toBe(expected);
    });
    it('is equal to first+third element for three-element array', function () {
      var input = [ 0, 1, 2 ];
      var actual = sumLib.sumEvenIndex(input);
      var expected = input[0] + input[2];
      expect(actual).toBe(expected);
    });
    it('is equal to first+third element for four-element array', function () {
      var input = [ 0, 1, 2, 3 ];
      var actual = sumLib.sumEvenIndex(input);
      var expected = input[0] + input[2];
      expect(actual).toBe(expected);
    });
    it('is equal to sum of all the Even indices', function () {
      var input = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
      var expectedArray = [ 0, 2, 4, 6, 8 ];
      var actual = sumLib.sumEvenIndex(input);
      var expected = sumLib.sum(expectedArray); // assume external library
      expect(actual).toBe(expected);
    });
  });
});
