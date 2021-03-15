const CustomError = require("../extensions/custom-error");
module.exports = function countCats(backyard) {
  backyard = String(backyard).split(',');
  let countCat = 0;
  for(let i = 0; i < backyard.length; i++) {
      if (backyard[i] === '^^') {
          countCat = countCat + 1;
      }
  }
  return countCat;
  }



