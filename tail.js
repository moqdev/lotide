const tail = function (arr) {
  let results = [];
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      results.push(arr[i]);
    }
    // results = arr.slice(1);

  }
  return results;
}


module.exports = tail

