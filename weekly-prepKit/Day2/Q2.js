// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

let i = 0;
    let j = 0;
    
    let leftSum = 0;
    let rightSum = 0;
    
    while(i < arr.length) {
        leftSum += arr[i][i];
        i++;
    }
    
    i--;
    while(i >= 0) {
        rightSum += arr[j][i];
        j++;
        i--;
    }
    
    return Math.abs(leftSum - rightSum);