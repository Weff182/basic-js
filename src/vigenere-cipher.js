const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directReverse) {
    this.directReverse = directReverse === false ? 'reverse' : 'direct';
  }
encrypt(message, key) {
  if(!message || !key) throw new Error();

  const arrNumb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = "";

  message = message.toUpperCase();
  key = key.toUpperCase();

 let a = 0;
 const strAlphabet = arrNumb.length;

  for (let i = 0; i < message.length; i++) {
     if(arrNumb.indexOf(message[i]) < 0) {
        result += message[i];
      a ++;

 } else {
    const MessageLetterIndex = arrNumb.indexOf(message[i]);
    const KeyLetterIndex = arrNumb.indexOf(key[(i - a) % key.length]);
    result += arrNumb.charAt((MessageLetterIndex + KeyLetterIndex) % strAlphabet);
    }
}
return (this.directReverse === 'reverse') ? result.split('').reverse().join('') : result;
}        
decrypt(encryptedMessage, key) {
  if(!encryptedMessage || !key) throw new Error(); 

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = "";

  encryptedMessage = encryptedMessage.toUpperCase();
  key = key.toUpperCase();

  let a = 0;
const strAlphabet = alphabet.length;

  for (let i = 0; i < encryptedMessage.length; i++) {
    if(alphabet.indexOf(encryptedMessage[i]) < 0) {
        result += encryptedMessage[i];
        a++;

    } else {
        const MessageLetterIndex = alphabet.indexOf(encryptedMessage[i]);
        const KeyLetterIndex = alphabet.indexOf(key[(i - a) % key.length]);
        result += alphabet.charAt(((MessageLetterIndex + strAlphabet) - KeyLetterIndex) % strAlphabet);
    }
}
return (this.directReverse == 'reverse') ? result.split('').reverse().join('') : result;

}
}
module.exports = VigenereCipheringMachine;



