"use strict";
function log(message) {
    console.log('LOG: ', message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
let add = (x, y) => x + y;
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
