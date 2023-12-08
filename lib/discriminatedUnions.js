"use strict";
function calcArea(shape) {
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    if (shape.kind === 'circle') {
        return shape.radius * shape.radius * Math.PI;
    }
}
function logResult(result) {
    if (result.isValid) {
        console.log('Success, validated value: ', result.validatedValue);
    }
    if (!result.isValid) {
        console.error("Failure, error reason: ", result.errorReason);
    }
}
