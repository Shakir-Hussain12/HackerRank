// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

const sums = [99999999999, -99999999999] 
    
    for (let i in arr){
        let currSum = arr.reduce((curr, acc) => curr + acc);
        currSum -= arr[i];
        sums[0] = Math.min(sums[0], currSum);
        sums[1] = Math.max(sums[1], currSum);
    }
    
    console.log(sums.join(' '))