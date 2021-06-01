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

module.exports = middle