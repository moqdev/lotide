
const words = ["ground", "control", "to", "major", "tom"];

// const map = function(array, callback) {
//   // temporary code:
//   console.log('array: ', array);
//   console.log('callback: ', callback);

//   const results = [];
//   return results;
// }

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const results1 = map(words, word => word[0]);
console.log(results1);
