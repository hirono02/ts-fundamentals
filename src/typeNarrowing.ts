type Square = {
    size: number,
};

type Rectangle = {
    width: number,
    height: number,
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  // If size property in params, TS assume it's a square
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  // If width property in params, TS assume it's a rectangle
  if ("width" in shape) {
    return shape.width * shape.height;
  }
}

area({size: 2});
area({width: 2, height: 3})
