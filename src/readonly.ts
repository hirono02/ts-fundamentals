type Point2 = {
    x: number,
    y: Number
};

const point2: Point2 = {
    x: 0,
    y: 0
};

// Variable Assignment does not work
// point2 = { x: 1, y: 1};

// Property Assignment is ok
point2.x = 1;
point2.y = 1;

type readOnlyPoint = {
    readonly x: number,
    readonly y: number
}

const readOnlyPoint: readOnlyPoint = {
    x: 0,
    y: 0
}

// Can read, can't reassign
// This throws an error
// readOnlyPoint.x = 1;
// readOnlyPoint.y = 3;

// Read
console.log(`(${readOnlyPoint.x}, ${readOnlyPoint.y})`);
