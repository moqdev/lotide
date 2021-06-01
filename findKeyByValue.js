const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const findKeyByValue = function (obj, val) {
  let result;
  for (let key in obj) {
    if (obj[key] === val) {
      result = key;
    }
  }
  return result;
}



// Tests
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const battleShipData = [
//   [null, 0, 0, 1],
//   [0, null, null, null],
//   [0, null, null, null],
//   [1, null, null, null],
// ];

// const print = (data) => {
//   for (const row of data) {
//     let line = "|";

//     for (const column of row) {
//       if (column === 0) {
//         line += "O";
//       } else if (column === 1) {
//         line += "X";
//       } else if (column === null) {
//         line += " ";
//       }

//       line += "|";
//     }

//     console.log(line);
//   }
// }

// print(battleShipData);