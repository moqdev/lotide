const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function (arr) {
  return arr.slice(1);
}
const testArr = [5, 6, 7];
tail(testArr)
assertEqual(testArr.length, 3);

