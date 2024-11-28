// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

let hashMap = {};
let freq = -1;
let res = 0;

for (let i of arr) {
    if (hashMap[i] !== undefined) {
        hashMap[i] += 1
    } else {
        hashMap[i] = 1;
    }
    
    if (hashMap[i] > freq) {
        freq = hashMap[i];
        res = i;
    }

    if (hashMap[i] == freq && Number(i) < res) {
        res = Number(i);
    }
}

console.log(res);