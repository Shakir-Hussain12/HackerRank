// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

let alphabets = {};
    let res = '';
    k = k % 26;
    
    for (let i = 97; i <= 122; i++) {
        let temp = i;
        
        if (temp + k > 122) {
            temp = temp - 26;
        }

        temp += k;
        alphabets[String.fromCharCode(i)] = String.fromCharCode(temp);
    }

    for (let i = 0; i < s.length; i++) {
        let temp = s.charCodeAt(i);
        if (temp >= 65 && temp <= 90) {
            temp = temp + 32;
            temp = String.fromCharCode(temp);
            
            if (alphabets[temp]) {
                res += alphabets[temp].toUpperCase();
            }
        } else if (alphabets[s[i]]) {
            res += alphabets[s[i]];
        } else {
            res += s[i];
        }
    }

    return res;