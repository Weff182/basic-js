const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(b) {
    let m = 0;
    for(let i = 0; i <= b.length; i++) {
      if (typeof(b[i]) === 'object') {
        m = m + 2;
        b = b[i]
        rec(b)
      }
    }
    return m; 
    }
    
};

function rec() {
  for(let i = 0; i <= b.length; i++) {
  if (typeof(b[i]) === 'object') {
    m = m + 1;
    b = b[i]
    rec(b)
  }
}  
}