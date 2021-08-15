
exports.min = function min (array) {
  if (array && array.length > 0) {
    let minNum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (minNum > array[i] ){
        minNum = array[i];
      }
    }
    return minNum;
  }
  return 0;
}

exports.max = function max (array) {
  if (array && array.length > 0) {
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (maxNum < array[i]) {
        maxNum = array[i];
      }
    }
    return maxNum;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length > 0) {
    let avgNum = 0;
    for (let i = 0; i < array.length; i++) {
        avgNum += array[i];
      }
    return avgNum / array.length;
  }
  return 0;
}
