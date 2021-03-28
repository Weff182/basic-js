const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(b) {
      const newArr = [];
      let isArray = false;
      let level = 1;

      for(let value of b){
          if (Array.isArray(value)){
              isArray = true;
              newArr.push(...value);
              continue;
          }else{
              newArr.push(value)
          }
      }
      if (isArray) {
          isArray = false;
          level +=this.calculateDepth(newArr);
      }
      return level;
  }
}