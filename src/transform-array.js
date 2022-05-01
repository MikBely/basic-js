const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arr1 = arr.slice();
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr1[i] == "--discard-next" && arr1[i + 2] == "--discard-prev") {
      i = i + 2;
    } else if (arr1[i] == "--discard-next" && arr1[i + 2] == "--double-prev") {
      i = i + 2;
    } else if (arr1[i] == "--discard-next" && i != arr.length - 1) {
      i++;
    } else if (arr1[i] == "--discard-prev" && i != 0) {
      finalArr.pop();
    } else if (arr1[i] == "--double-next" && i != arr.length - 1) {
      arr1[i] = arr1[i + 1];
      finalArr.push(arr1[i]);
    } else if (arr1[i] == "--double-prev" && i != 0) {
      arr1[i] = arr1[i - 1];
      finalArr.push(arr1[i]);
    } else {
      finalArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < finalArr.length; i++) {
    if (
      finalArr[i] == "--discard-next" ||
      finalArr[i] == "--discard-prev" ||
      finalArr[i] == "--double-next" ||
      finalArr[i] == "--double-prev"
    ) {
      finalArr.splice(i, 1);
      i--;
    }
  }
  return finalArr;
}

module.exports = {
  transform,
};
