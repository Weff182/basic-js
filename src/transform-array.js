const CustomError = require("../extensions/custom-error");
module.exports = function transform(a) {
  let k = a.map(function name(number) {
    if (number === '--double-next') {
      m = a.indexOf('--double-next');
      if (m === a.length-1) {
        number = 'delete';
       return number;
      }
   number = a[m+1];
      return number;
   }
    if (number === '--double-prev') {
      if (m === 0) {
        number = 'delete';
       return number;
      }
      m = a.indexOf('--double-prev');
   number = a[m-1];
      return number;
   }
    if (number === '--discard-next') {
     m = a.indexOf('--discard-next');
      a[m+1]= 'delete';
      number = 'delete';
       return number;
   }
    if (number === '--discard-prev') {
     m = a.indexOf('--discard-prev');
           number = 'delete2';
        return number;
   }
  return number;
   })
   a = a.join('').split('');
 for (let i = 0; i < k.length; i++) {
   if (k[i] === 'delete2') {
     k[i]= 'delete';
     k[i-1] = 'delete';
   }
 }
 function elete(num) {
     return num !== 'delete';
   }
   k = k.filter(elete);
   k = k.filter(und);
   return k;
  }
function und(num) {
  return num !== undefined;
}

