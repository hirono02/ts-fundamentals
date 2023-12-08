"use strict";
let user = { id: 'user-12das9d' };
let product = { id: 'product-19d934' };
// Both below are valid because the type structure is the same
user = product;
product = user;
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 40, z: 20 };
// Extra info is ok in TypeScript, too little info is not ok (known as Duck Typing)
point2D = point3D;
function takesPoint2D(point) {
    let x = point.x;
    let y = point.y;
    console.log('The coordinates are: (' + x + ',' + y + ')');
}
takesPoint2D(point3D);
