// // We define super digit of an integer x using the following rules:

// // Given an integer, we need to find the super digit of the integer.

// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

let check = 0;    
            
    while (n.length > 1) {
        let sum = 0;
        for (let i in n) {
            sum += Number(n[i])
        }
        
        if (check == 0) {
            check = 1;
            sum *= k;
        }
        
        n = String(sum);
    }
    
    return Number(n);