// Sean invented a game involving a matrix where each cell of the matrix contains an integer. He
// can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum
// of the elements in the submatrix located in the upper-left quadrant of the matrix.
// Given the initial configurations for matrices, help Sean reverse the rows and columns of each matrix in the
// best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

let i = 0;
 let len = matrix.length - 1;
 let maxSum = 0;
 
 while(i < Math.floor(matrix.length/2)) {
 let j = 0;
 while (j < Math.floor(matrix.length/2)) {
 maxSum += Math.max(matrix[i][j], matrix[i][len - j], matrix[len -
i][j], matrix[len - i][len - j]);
 j++;
 }
 i++;
 }
 
 return maxSum;
