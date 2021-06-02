const assert = require('chai').assert;
const middle = require('../middle.js');

describe("#middle", () => {

  it("should be equal to [2,3] for [1,2,5,3]", () => {
    const ini = middle([1, 2, 3, 4]);
    const outi = [2, 3];
    assert.deepEqual(initial, output);
  });

  it("should return empty array when array length is less than 3", () => {
    const ini = middle([1]);
    const output = [];
    assert.deepEqual(input, output);
  })

  it("should return empty array when array length is less than 3", () => {
    const input = middle([1, 2]);
    const output = [];
    assert.deepEqual(input, output);
  })

  it("should return [2] for [1,2,3]", () => {
    const input = middle([1, 2, 3]);
    const output = [2];
    assert.deepEqual(input, output);
  });
});

// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []


// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]


// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]

