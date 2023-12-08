type Point2Dee = {
    x: number,
    y: number,
};

type Point3Dee = {
    x: number,
    y: number,
    z: number,
};

type Pearson = {
    name: string,
    email: string,
};

let points2: Point2Dee = {
    x: 0,
    y: 0
};

let points3: Point3Dee = {
    x: 10,
    y: 10,
    z: 20,
};

let jessica: Pearson = {
    name: 'jessica',
    email: 'jessica@pearsonspecter.com'
};

// Structural, can assign Point2D to point 3D because 2D has all the variables of 3D
// points2 = points3 --> This is ok
// point3 = points2 --> This throws an error
// points3 = points2 as Point3Dee; --> This tells TypeScript it is a Point3Dee

// pearson = points3;
// points3 = pearson;
// points3 = pearson as Point3Dee;  // This will still be an error because of bi-incompatability
// points3 = pearson as unkown as Point3Dee;    // This works because unknown allows 1 way compatability, which makes the assertion work



