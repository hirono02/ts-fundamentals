"use strict";
function loadPerson() {
    return { name: 'Rosa Parks' };
}
// Mostly used when writing application tests
// This tells the TS compiler that the function only returns if condition is true
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
function assertDate(value) {
    if (value instanceof Date)
        return;
    else
        throw new TypeError('value is not a Date');
}
