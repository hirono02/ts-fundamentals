"use strict";
let neverDefined = undefined;
let neverPresent = null;
function logVowels(value) {
    console.log(value.match(/[aeiou]/gi));
}
logVowels('hello'); // [e, o]
logVowels('sky'); // null
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(undefined == null); // true
console.log(false == null); // false
console.log(0 == null); // false
console.log('' == null); // false
function decorate(value) {
    if (value == null) {
        return value;
    }
    return `-- ${value.trim()} --`;
}
console.log(decorate('Hello')); // -- Hello --
console.log(decorate('Hello World    ')); // -- Hello World --
console.log(decorate(null)); // null
console.log(decorate(undefined)); // undefined
