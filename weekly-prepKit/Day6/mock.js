let s = 3;
n = 10;
m = 6;

let edges = [ [ 3, 1 ], [ 10, 1 ], [ 10, 1 ], [ 3, 1 ], [ 1, 8 ], [ 5, 2 ] ]

let queue = [];
let visited = {};
let cost = new Array(n).fill(-1);

queue.push(s);
visited[s] = 1;
let counter = 0;
cost[s - 1] = 0;

while (counter < m && queue.length > 0) {
    let currNode = queue.shift();
    for(let i of edges) {
        let neighbor = -1;
        if (i[0] === currNode && !visited[i[1]]) {
            neighbor = i[1];
        } else if (i[1] === currNode && !visited[i[0]]) {
            neighbor = i[0];
        }

        if (neighbor != -1) {
            queue.push(neighbor);
            visited[neighbor] = 1;
            cost[neighbor - 1] = cost[currNode - 1] + 6;
        }
    }
    counter++;
}

cost = cost.filter((elem) => elem != 0);
console.log(cost);