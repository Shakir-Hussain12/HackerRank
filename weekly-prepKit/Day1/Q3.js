// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

let sep = s.split(':')
    let code = sep[sep.length - 1].substr(2, sep[sep.length])
    
    if (code == 'PM') {
        if(sep[0] < 12) {
            const calc = Number(sep[0]) + 12
            sep[0] = calc;
        }
    }
    
    if (code == 'AM') {
        if (sep[0] == 12) {
            sep[0] = '00'
        }
    }
    
    sep = sep.join(':')
    sep = sep.substr(0, sep.length - 2);
    return sep;