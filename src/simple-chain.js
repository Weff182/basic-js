const CustomError = require("../extensions/custom-error");
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(val) {
    const ne = val !== null ? `${val}` : 'null';
    this.chain.push(`( ${ne} )`);
    return this;    
  },
  removeLink(positions) {
    if (positions <= 0 || typeof positions !== 'number' || positions % 1 !== 0 || positions >= this.chain.length) {
      this.chain = [];
      throw new Error;
    }

    this.chain.splice(positions - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
}


module.exports = chainMaker;
