// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

const len = arr.length;
    
    let counts = {
        plus: 0,
        minus: 0,
        zero: 0
    };
    
    for (let i of arr) {
        if (i < 0) {
            counts['minus'] += 1
        } else if ( i > 0) {
            counts['plus'] +=1 
        } else {
            counts['zero'] += 1
        }
    }
    
    console.log((counts['plus']/len).toPrecision(6));
    console.log((counts['minus']/len).toPrecision(6));
    console.log((counts['zero']/len).toPrecision(6));