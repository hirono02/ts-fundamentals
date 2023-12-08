"use strict";
// Mostly used when writing application code
// User defined type guard is simply a function that returns a value
// If returns true, the shape is a type Square1
function isSquare(shape) {
    return 'size' in shape;
}
function isRectangle(shape) {
    return 'width' in shape;
}
function areaCalculation(shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    const _ensure = shape;
    return _ensure;
}
