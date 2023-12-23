const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const answer = new Object;

  for(let domain of domains)
  {
    let list = domain.split('.').reverse();
    let new_domain = "";
    for(let element of list)
    {
      new_domain +='.'+element;
      if(!answer.hasOwnProperty(new_domain))
      {
        answer[new_domain] = 0;
      }
      answer[new_domain]++;
    }
  }

  return answer;
}

module.exports = {
  getDNSStats
};
