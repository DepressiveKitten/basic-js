const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let answer = [];
  let addition = options.addition;
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  str = new String(str)||"";
  addition = addition!==undefined?new String(addition):"";

  addition = Array(additionRepeatTimes).fill(addition);
  addition = addition.join(additionSeparator);
  answer = Array(repeatTimes).fill(str);
  return answer.join(addition+separator)+addition;
}

repeater('la', { repeatTimes: 3 });

module.exports = {
  repeater
};
