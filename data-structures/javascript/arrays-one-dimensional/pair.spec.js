var lib = require('./pair');

describe('reverse-pair', () => {
  it('returns undefined on empty input array', () => {
    var actual = lib.reversePair([], 0);
    var expected = undefined;
    expect(actual).toBe(expected);
  });
  it('returns undefined when size < 0', () => {
    var input = [1, 2, 3];
    var actual = lib.reversePair(input, -1);
    var expected = undefined;
    expect(actual).toBe(expected);
  });
  it('returns undefined when size = 0', () => {
    var input = [1, 2, 3];
    var actual = lib.reversePair(input, 0);
    var expected = input;
    expect(actual).toBe(expected);
  });
  it('returns undefined when input array contains non numerical element', () => {
    var input = [1, 2, 3, 'x'];
    var actual = lib.reversePair(input, 2);
    var expected = undefined;
    expect(actual).toBe(expected);
  });
  it('returns single item array when input array contains single item array', () => {
    var input = [1];
    var actual = lib.reversePair(input, 2);
    var expected = [1];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });

  it('retruns reversed array when pair size is 1', () => {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var actual = lib.reversePair(input, 1);
    var expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
  it('retruns pair-reversed array when pair size is 2', () => {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var actual = lib.reversePair(input, 2);
    var expected = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
  it('retruns pair-reversed array when pair size is 2', () => {
    var input = [1, 4, 2, 3, 5, 9, 6, 7, 8, 10];
    var actual = lib.reversePair(input, 2);
    var expected = [4, 1, 3, 2, 9, 5, 7, 6, 10, 8];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
  it('retruns pair-reversed array when pair size is 3', () => {
    var input = [1, 4, 2, 3, 5, 9, 6, 7, 8, 10];
    var actual = lib.reversePair(input, 3);
    var expected = [2, 4, 1, 9, 5, 3, 8, 7, 6, 10];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});

describe('sort-pair', () => {
  let sortDesc;
  let sortAsc;
  beforeAll(() => {
    sortDesc = (first, second) => second - first;
    sortAsc = (first, second) => first - second;
  });
  it('returns undefined on empty input array', () => {
    var actual = lib.sortPair([], 0, sortDesc);
    var expected = undefined;
    expect(actual).toBe(expected);
  });
  it('returns undefined when size < 0', () => {
    var input = [1, 2, 3];
    var actual = lib.sortPair(input, -1, sortDesc);
    var expected = undefined;
    expect(actual).toBe(expected);
  });
  it('returns undefined when size = 0', () => {
    var input = [1, 2, 3];
    var actual = lib.sortPair(input, 0, sortDesc);
    var expected = input;
    expect(actual).toBe(expected);
  });
  it('returns undefined when input array contains non numerical element', () => {
    var input = [1, 2, 3, 'x'];
    var actual = lib.sortPair(input, 2, sortDesc);
    var expected = undefined;
    expect(actual).toBe(expected);
  });
  it('returns single item array when input array contains single item array', () => {
    var input = [1];
    var actual = lib.sortPair(input, 2, sortDesc);
    var expected = [1];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });

  it('retruns sorted array when pair size is 1', () => {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var actual = lib.sortPair(input, 1, sortDesc);
    var expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
  it('retruns pair-sorted array when pair size is 2', () => {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var actual = lib.sortPair(input, 2, sortDesc);
    var expected = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
  it('retruns pair-sorted array when pair size is 2', () => {
    var input = [1, 4, 2, 3, 5, 9, 6, 7, 8, 10];
    var actual = lib.sortPair(input, 2, sortDesc);
    var expected = [4, 1, 3, 2, 9, 5, 7, 6, 10, 8];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
  it('retruns pair-sorted array when pair size is 3', () => {
    var input = [1, 4, 2, 3, 5, 9, 6, 7, 8, 10];
    var actual = lib.sortPair(input, 3, sortDesc);
    var expected = [4, 2, 1, 9, 5, 3, 8, 7, 6, 10];
    expect(actual.length).toBe(expected.length);
    for (let i = 0, len = actual.length; i < len; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
