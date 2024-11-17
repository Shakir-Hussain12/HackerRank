// Given an array of integers, where all elements but one occur twice, find the unique element.

let hash = {}
    
    for (let i of a) {
        if (hash[i] == undefined) {
            hash[i] = 1;
        } else {
            hash[i] += 1;
        }
    }
    
    console.log(hash);
    
    for (let i in hash) {
        if(hash[i] == 1) {
            return Number(i);
        }
    }