const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  if ( members === null || typeof(members) !== 'object' || "foo" in members === true ) {
    members = [];
      }
   let a = members.map(function name(params) {
    if (typeof(params) === 'string'){
      for (let i=0; i<params.length; i++){
          if (params[i] !== ' ') {
          return params[i];
        }
      }
    }
    params = 'delete'
    return params;
  })
  function elete(a) {
       return a !== 'delete';
     }
  a = a.filter(elete).sort().join('').toUpperCase().split('').sort().join('');
  if (a.length === 0) {
    a = false;
    return a;
    }
  return a;
}

