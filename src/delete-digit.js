const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  digits = n.toString();
  for(let i = 0; i < digits.length-1;i++)
  {
    if(digits[i+1]>digits[i])
    {
      return Number(digits.slice(0, i) + digits.slice(i+1, digits.length));
    }
  }
  return Number(digits.slice(0, digits.length-1));
}

module.exports = {
  deleteDigit
};
