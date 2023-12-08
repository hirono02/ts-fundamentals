// Function overloading in TS is compile time
// Can only have 1 body for the function which handles all overloaded cases
function reverse(s: string): string;
function reverse(s: string[]): string[];
function reverse(s: string | string[]) {
    if (typeof s === 'string') {
        return s.split('').reverse().join('');
    } else {
        return s.slice().reverse();
    }
}

const isaac = reverse('isaac')  // 'caasi'
const i_s_a_a_c = reverse(['i','s','a','a','c']);   // ['c','a','a','s','i']

console.log(isaac);
console.log(i_s_a_a_c);

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    } else {
        return new Date(timestampOrYear);
    }
}

const isaacThirtyYearsOld = makeDate(2032, 7, 5);
const epoch = makeDate(0);

// const invalid = makeDate(2000,1)    // Invalid, 1 will be ignored in this case without errors if not function overloading


console.log(isaacThirtyYearsOld);
console.log(epoch);
