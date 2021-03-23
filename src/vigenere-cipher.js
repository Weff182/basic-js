const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(input, keyword) {
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
              'H', 'I', 'J', 'K', 'L', 'M', 'N', 
              'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
              'V', 'W', 'X', 'Y', 'Z'];
input = input.toUpperCase();
keyword = keyword.toUpperCase();
let result = "";
let keyword_index = 0;
let N = arr_EN.length;
input.split('').forEach((element) => {
  let c = (arr_EN.indexOf(element) + arr_EN.indexOf(keyword[keyword_index])) % N;
         result += arr_EN[c];
         keyword_index++;
         if ((keyword_index + 1) == keyword.length) {
           keyword_index = 0;
         }
    })
       return result;
  }    
  decrypt(input, keyword) {
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
    'V', 'W', 'X', 'Y', 'Z'];
input = input.toUpperCase();
keyword = keyword.toUpperCase();
let result = "";
let keyword_index = 0;
let N = arr_EN.length;
input.split('').forEach((element) => {
  let c = (arr_EN.indexOf(element) + N - arr_EN.indexOf(keyword[keyword_index])) % N;
  result += arr_EN[c];
  keyword_index++;
  if ((keyword_index + 1) == keyword.length) {
    keyword_index = 0;
  }
})
return result;
}
}    
module.exports = VigenereCipheringMachine;



