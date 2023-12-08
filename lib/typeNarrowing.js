"use strict";
function area(shape) {
    // If size property in params, TS assume it's a square
    if ("size" in shape) {
        return shape.size * shape.size;
    }
    // If width property in params, TS assume it's a rectangle
    if ("width" in shape) {
        return shape.width * shape.height;
    }
}
area({ size: 2 });
area({ width: 2, height: 3 });
