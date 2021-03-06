const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const { assertArraysEquals } = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const min = require('./min');
const sum = require('./sum');
const takeUntil = require('./takeUntil');
const without = require('./without');
const titleCase = require('./titleCase');

module.exports = {
  head,
  tail,
  middle,
  map,
  min,
  sum,
  assertArraysEquals,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  takeUntil,
  without,
};

// // Shorter version:
// const head = require('./head');
// const tail = require('./tail');
// const middle = require('./middle');
// const { assertArraysEquals } = require('./assertArraysEqual');
// const assertEqual = require('./assertEqual');
// const assertObjectsEqual = require('./assertObjectsEqual');
// const countLetters = require('./countLetters');
// const countOnly = require('./countOnly');
// const eqArrays = require('./eqArrays');
// const eqObjects = require('./eqObjects');
// const findKey = require('./findKey');
// const findKeyByValue = require('./findKeyByValue');
// const letterPositions = require('./letterPositions');
// const map = require('./map');
// const min = require('./min');
// const sum = require('./sum');
// const takeUntil = require('./takeUntil');
// const without = require('./without');
// const titleCase = require('./titleCase');

// module.exports = {
//   head,
//   tail,
//   middle,
//   map,
//   min,
//   sum,
//   assertArraysEquals,
//   assertEqual,
//   assertObjectsEqual,
//   countLetters,
//   countOnly,
//   eqArrays,
//   eqObjects,
//   findKey,
//   findKeyByValue,
//   letterPositions,
//   takeUntil,
//   without,
//   titleCase
// };