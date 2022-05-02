const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    key = key.toUpperCase();
    while (message.length > key.length) {
      key += key.repeat(1);
    }
    key = key.slice(0, message.length);

    let whitespaceIndex = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") whitespaceIndex.push([i]);
    }
    message = message.toUpperCase().split(" ").join("");

    let siphere = [];
    let startPosition = "A".charCodeAt(0);

    for (let i = 0; i < key.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let keyPosition = key.charCodeAt(i) - startPosition;
        let messagePosition = message.charCodeAt(i) - startPosition;
        siphere.push(
          String.fromCharCode(
            startPosition + ((keyPosition + messagePosition) % 26)
          )
        );
      } else {
        siphere.push(message[i]);
      }
    }
    whitespaceIndex.forEach((item) => {
      siphere.splice(item, 0, " ");
    });

    return this.isDirect === true
      ? siphere.join("")
      : siphere.reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    key = key.toUpperCase();
    while (message.length > key.length) {
      key += key.repeat(1);
    }
    key = key.slice(0, message.length);

    let whitespaceIndex = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") whitespaceIndex.push([i]);
    }
    message = message.toUpperCase().split(" ").join("");

    let siphere = [];
    let startPosition = "A".charCodeAt(0);

    for (let i = 0; i < key.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let keyPosition = key.charCodeAt(i) - startPosition;
        let messagePosition = message.charCodeAt(i) - startPosition;

        siphere.push(
          String.fromCharCode(
            startPosition + ((messagePosition - keyPosition + 26) % 26)
          )
        );
      } else {
        siphere.push(message[i]);
      }
    }
    whitespaceIndex.forEach((item) => {
      siphere.splice(item, 0, " ");
    });

    return this.isDirect === true
      ? siphere.join("")
      : siphere.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
