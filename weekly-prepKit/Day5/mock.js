// Given an array of integers and a target value, determine the number of pairs of array elements that have a
// difference equal to the target value.

const hashMap = {};
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let acc = arr[i] + k;
    if (hashMap[acc] !== undefined) {
        count += hashMap[acc];
    }

    acc = arr[i] - k;
    if (hashMap[acc] !== undefined && acc > 0) {
        count += hashMap[acc];
    }

    if (hashMap[arr[i]] != undefined) {
        hashMap[arr[i]] += 1;
    } else {
        hashMap[arr[i]] = 1;
    }
}

return count;