const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hodi = Math.pow(2, disksNumber) - 1;
  let sec = (hodi / (turnsSpeed / 3600));
    return {turns: hodi, seconds: Math.floor(sec)}
};
