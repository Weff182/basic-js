const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(b) {
      const newArr = [];
      let isArr = false;
      let pos = 1;

      for(let value of b){
          if (Array.isArray(value)){
              isArr = true;
              newArr.push(...value);
              continue;
          }else{
              newArr.push(value)
          }
      }
      if (isArr) {
          isArr = false;
          pos +=this.calculateDepth(newArr);
      }
      return pos;
  }
}