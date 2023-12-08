"use strict";
let direction;
// Typescript allows us to use any string literal in a type position
direction = 'North';
// Throws a compile time error
// direction = 'n0r7h';
function move(distanceMeters, direction) {
    console.log(`Moving ${distanceMeters} meters ${direction}.`);
}
move(25, 'North');
function rollingDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
// Won't ever happen
// if (rollDice === 7) {
//     throw new Error('Impossible number');
// }
