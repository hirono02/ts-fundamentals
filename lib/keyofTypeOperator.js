"use strict";
const johnBoy = {
    name: 'John',
    age: 35,
    location: 'Perth',
};
function logGet(obj, key) {
    const value = obj[key];
    console.log('Getting:', key, value);
    return value;
}
const age = logGet(johnBoy, 'age'); // 35
function logSet(obj, key, value) {
    console.log('Setting:', key, value);
    obj[key] = value;
}
const cheryl = {
    name: 'cheryl',
    age: 30,
    location: 'Singapore',
};
logSet(cheryl, 'age', 21);
console.log("Cheryl's age is: ", cheryl.age);
