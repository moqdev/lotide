// const min = function (numbers) {
//   let minNum = Infinity;
//   for (let i = 0; i < numbers.length; i++) {
//     const currentNum = numbers[i]
//     if (currentNum < minNum) {
//       minNum = currentNum;
//     }
//   }
//   return minNum;
// }

// const min = function (numbers) {

// }
// return smallNum;

const min = function (arr) {
	/* IMPLEMENT ME */
	let smallNum = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (smallNum > arr[i]) {
			smallNum = arr[i];
		}
	}
	return smallNum;
};

module.exports = min;
/*
 * Test runner code calling min function defined. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);