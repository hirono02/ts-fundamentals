"use strict";
function reverse(s) {
    if (typeof s === 'string') {
        return s.split('').reverse().join('');
    }
    else {
        return s.slice().reverse();
    }
}
const isaac = reverse('isaac'); // 'caasi'
const i_s_a_a_c = reverse(['i', 's', 'a', 'a', 'c']); // ['c','a','a','s','i']
console.log(isaac);
console.log(i_s_a_a_c);
function makeDate(timestampOrYear, month, day) {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    }
    else {
        return new Date(timestampOrYear);
    }
}
const isaacThirtyYearsOld = makeDate(2032, 7, 5);
const epoch = makeDate(0);
// const invalid = makeDate(2000,1)    // Invalid, 1 will be ignored in this case without errors if not function overloading
console.log(isaacThirtyYearsOld);
console.log(epoch);
