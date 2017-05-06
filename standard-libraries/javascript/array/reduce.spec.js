let reduce = require('./reduce');

describe('reduce array', () => {
  it('return 0 if empty array', () => {
    let input = [];
    let expected = 0;
    let actual = reduce.reduceArray(input, (accumulated, current, index, array) => {
      return accumulated + current;
    }, 0);
    expect(actual).toBe(expected);
  });
  it('return 10 if array = [ 1, 2, 3, 4 ]', () => {
    let input = [1, 2, 3, 4];
    let expected = 10;
    let actual = reduce.reduceArray(input, (accumulated, current, index, array) => {
      return accumulated + current;
    }, 0);
    expect(actual).toBe(expected);
  });
  describe('array modification', () => {
    it('doesn\'t screw up with reduction by modifying during reduction', () => {
      let input = [1, 2, 3, 4];
      let expected = 10;
      let actual = reduce.reduceArray(input, (accumulated, current, index, array) => {
        return accumulated + current;
      }, 0);
      expect(actual).toBe(expected);
      let screwUp = reduce.reduceArray(
        input,
        (accumulated, current, index, array) => {
          if (index < 10) {
            array[array.length + 1] = 100;
          }
          return accumulated + current;
        },
        0);
      expect(screwUp).toBe(expected);
      expect(input.length).not.toBe(4); // since the length of input will change.
    });
  });
});

describe('reduce objects', () => {
});
