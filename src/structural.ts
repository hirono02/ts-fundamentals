type User = { id: string};
type Product = { id: string };

let user: User = { id: 'user-12das9d'};
let product: Product = { id: 'product-19d934'};

// Both below are valid because the type structure is the same
user = product;
product = user;


type Point2D = { x: number, y: number};
type Point3D = { x: number, y: number, z: number};

let point2D: Point2D = { x: 0, y: 10};
let point3D: Point3D = { x: 0, y: 40, z: 20};

// Extra info is ok in TypeScript, too little info is not ok (known as Duck Typing)
point2D = point3D;
function takesPoint2D(point: Point2D) {
    let x: number = point.x;
    let y: number = point.y;
    console.log('The coordinates are: (' + x + ',' + y + ')'); 
}

takesPoint2D(point3D);
