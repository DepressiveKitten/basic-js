const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  reverse;
  constructor(reverse = true)
  {
    this.reverse = !reverse;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    return this.general(message, key, 1);
  }
  decrypt(message, key) {
    return this.general(message, key, -1);
  }

  general(message, key, direction)
  {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let answer = "";

    for(let i = 0, j = 0;i<message.length;i++,j=(j+1)%key.length)
    {
      if(this.alphabet.indexOf(message[i])<0)
      {
        answer+=message[i];
        j--;
        continue;
      }
      let shift = (this.alphabet.indexOf(key[j]))*direction;
      let char_number = this.alphabet.indexOf(message[i]);
      answer+=this.alphabet[(char_number+shift+this.alphabet.length)%this.alphabet.length];
    }

    if(this.reverse)
    {
      answer = answer.split("").reverse().join("");
    }

    return answer;
  }
}

module.exports = {
  VigenereCipheringMachine
};
