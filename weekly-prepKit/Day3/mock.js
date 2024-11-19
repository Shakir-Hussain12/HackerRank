// Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be
// removed to make the string a palindrome. There may be more than one solution, but any will do. If the word
// is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to
// remove.

let start = 0;
let end = s.length - 1;

while (start < end) {
    if (s[start] !== s[end]) {
        let begin = start + 1;
        let ending = end;
        let found = 0;

        while (begin < ending) {
            if (s[begin] != s[ending]) {
                found = 1;
            }
            begin++;
            ending--;
        }
        if (!found) return start;

        found = 0;
        begin = start;
        ending = end - 1;
        while (begin < ending) {
            if (s[begin] !== s[ending]) {
                found = 1;
                return -1;
            }
            begin++;
            ending--;
        }

        if (!found) return end;

        return -1;
    }
    start++;
    end--;
}

return -1;
   }