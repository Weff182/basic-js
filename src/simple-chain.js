const CustomError = require("../extensions/custom-error");
let array = [];
const chainMaker = {
    getLength(array) {
   return array.length;
  },
  addLink(value) {
    value = `( ${value} )~~`
    return array.push(String(value));
  },
  removeLink(position) {
    return array.splice(position - 1, 1)
  },
  reverseChain(array) {
    return array.reverse();
  },
  finishChain(array) {
    array = array.join('');
    return array;
  }
};

module.exports = chainMaker;
