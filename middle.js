const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};
const middle = function (arr) {
  const arrLen = arr.length
  if (arrLen <= 2) {
    return [];
  }
  if (arrLen % 2 !== 0) {
    return [arr[Math.floor(arrLen / 2)]]
  } else {
    const arrMiddle = arrLen / 2
    return [arr[arrMiddle - 1], arr[arrMiddle]]
  }
}
