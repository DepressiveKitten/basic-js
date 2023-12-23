const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  let answer = "";
  for(let i = 0;i<str.length; i++)
  {
    counter++;
    if(i==str.length-1||str[i]!=str[i+1])
    {
      if(counter>1)
      {
        answer+=counter;
      }
      counter=0;
      answer+=str[i];
    }
  }

  return answer;
}

module.exports = {
  encodeLine
};
