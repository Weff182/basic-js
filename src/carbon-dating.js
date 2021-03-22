const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(el) {
  if (Number(el) === NaN) {
    return false;
  }
  if (el === undefined || el === null || typeof el !== 'string' || isNaN(Number(el)) === true || Number(el) <= 0) {
    return false;
      }
    let  k = (HALF_LIFE_PERIOD / Math.LN2) * 10000;
   let result = (Math.log(MODERN_ACTIVITY / el) / k) * 10000;
   return Math.ceil(result)
};
