const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(b) {
    let m = 1;
    for(let i = 0; i <= b.length; i++) {
      if (typeof(b[i]) === 'object') {
        m = m + 1;
        b = b[i]
        rec(b)
      }
    }
    return m; 
    } 
};

function rec(b) {
  for(let i = 0; i <= b.length; i++) {
  if (typeof(b[i]) === 'object') {
    m = m + 1;
    b = b[i]
    rec(b)
  }
}  
}