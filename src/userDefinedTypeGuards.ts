type Square1 = {
    size: number,
}

type Rectangle1= {
    width: number,
    height: number,
}

type Shape1 = Square1 | Rectangle1;

// Mostly used when writing application code

// User defined type guard is simply a function that returns a value
// If returns true, the shape is a type Square1
function isSquare(shape: Shape1): shape is Square1 {
    return 'size' in shape;
}

function isRectangle(shape: Shape1): shape is Rectangle1 {
    return 'width' in shape;
}

function areaCalculation(shape: Shape1) {
     if (isSquare(shape)) {
        return shape.size * shape.size;
     }
     if (isRectangle(shape)) {
        return shape.width * shape.height;
     }
     const _ensure: never = shape;
     return _ensure;
}
