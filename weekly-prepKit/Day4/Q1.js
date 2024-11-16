// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

for (let i in grid) {
    grid[i] = grid[i].split('').sort().join('');
}

let iter = 0;
let index = 0;

while(index < grid.length) {
    iter = 0;
    while(iter < grid.length - 1) {
        if(grid[iter][index] > grid[iter + 1][index]) {
            return 'NO';
        }
        iter++;
    }
    index++;
}

return 'YES';