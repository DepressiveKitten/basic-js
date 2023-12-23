const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let values = [];
  for(let element of arr){
    if(element!=-1)
    {
      values.push(element);
    }
  }
  values.sort(function(a, b) {
    return a - b;
  });

  for(let i = 0,j=0; i< arr.length; i++)
  {
    if(arr[i]!=-1)
    {
      arr[i] = values[j++];
    }
  }

  return arr;
}

sortByHeight([4, 2, 9, 11, 2, 16]);

module.exports = {
  sortByHeight
};
