const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
}

let transformArray = [];

for ( let i=0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
        if ( i < arr.length - 1 ) {
            i++;
        }

    } else if (arr[i] == '--discard-prev') {
        if(arr[i - 2] !== '--discard-next'){
            transformArray.pop();
        }

    } else if (arr[i] == '--double-next') {
        if(i + 1 < arr.length){
            transformArray.push(arr[i + 1]);
        }
            
    } else if (arr[i] == '--double-prev') {
        if(i > 0 && arr[i - 2] !== '--discard-next'){
            transformArray.push(arr[i - 1]);
        }

    } else {
        transformArray.push(arr[i]);
    }
        
    }
return transformArray;
};

