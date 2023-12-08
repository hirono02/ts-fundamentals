"use strict";
const point2 = {
    x: 0,
    y: 0
};
// Variable Assignment does not work
// point2 = { x: 1, y: 1};
// Property Assignment is ok
point2.x = 1;
point2.y = 1;
const readOnlyPoint = {
    x: 0,
    y: 0
};
// Can read, can't reassign
// This throws an error
// readOnlyPoint.x = 1;
// readOnlyPoint.y = 3;
// Read
console.log(`(${readOnlyPoint.x}, ${readOnlyPoint.y})`);
