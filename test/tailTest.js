
// const assertEqual = require('../assertEqual')

// const tail = require('../tail');

// // const testArr = [5, 6, 7];
// const results = tail([5, 6, 7]); //[6,7]
// const results2 = tail([]); //empty []
// const results3 = tail([0]); //empty []

// it('tests the tail returns an array except for the first element', () => {
//   assertEqual(results.length, 2)
//   assertEqual(results[0], 6)
//   assertEqual(results[1], 7)
// })

// it('tests to see if tail returns an empty array when an array is empty', () => {
//   assertEqual(results2.length, 0)
// })

// it('tests to see if tail returns an empty array when an array has one element', () => {
//   assertEqual(results3.length, 0)
// })

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns '6, 7' for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), ([6, 7]));
  });
  it("returns '[]' for ([])", () => {
    assert.deepEqual(tail(['']), []);
  });
});


// describe("#head", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(head([1, 2, 3]), 1);
//   });
//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(head(['5']), '5');
//   });
// });

