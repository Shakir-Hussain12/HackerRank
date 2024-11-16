// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print 'Too chaotic'.

let totalSum = 0;
    let swapped = true;
    
    let res = [];
    for (let i in q) {
        res[i] = Number(i) + 1;
    }

    while(1) {
        swapped = false;
        for (let i = 0; i < q.length;  i++) {
            if (q[i] !== res[i]) {
                swapped = true;
                let iter = i;
                let count = 0;
                
                while(res[iter] != q[i]) {
                    count++;
                    iter++;

                    if (count > 2) {
                        console.log('Too chaotic');
                        return;
                    }
                }
                
                while(iter != i) {
                    [res[iter], res[iter - 1]] = [res[iter - 1], res[iter]]
                    iter--;
                }

                totalSum += count;
                break;
            }
        }

        if (!swapped) break;
    }
    
    console.log(totalSum)
    return;