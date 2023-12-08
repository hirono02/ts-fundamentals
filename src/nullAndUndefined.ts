let neverDefined: undefined = undefined;
let neverPresent: null = null;


function logVowels(value: string) {
    console.log(value.match(/[aeiou]/gi));
}

logVowels('hello'); // [e, o]
logVowels('sky');    // null

console.log (null == null); // true
console.log (undefined == undefined);   // true
console.log(undefined == null);     // true

console.log(false == null);  // false
console.log(0 == null);  // false
console.log('' == null);  // false

function decorate(value: string | null | undefined) {
    if (value == null) {
        return value;
    }
    return `-- ${value.trim()} --`;
}

console.log(decorate('Hello')); // -- Hello --
console.log(decorate('Hello World    ')); // -- Hello World --
console.log(decorate(null));    // null
console.log(decorate(undefined));   // undefined
