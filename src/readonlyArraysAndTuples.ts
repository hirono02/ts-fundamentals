function reverseSorted(input: number[]): number[] {
    return input.sort().reverse();
}

const start = [1,2,3,4,5];
const reverseResult = reverseSorted(start); // Mutates the oarray
console.log("Result: ", reverseResult);    // [5,4,3,2,1]
console.log("Start: ", start);  // [5,4,3,2,1]

function readOnlyReverseSort(input: readonly number[]): number[] {
    // Slice creates a new non read only array
    return input.slice().sort().reverse()
}

const start1 = [1,2,3,4,5];
const reverseResult1 = readOnlyReverseSort(start1);
console.log("Read-Only Start: ", start1);   // [1,2,3,4,5]
console.log("Read-Only Result: ", reverseResult1);  // [5,4,3,2,1]


type Neat = readonly number[];
type Long = ReadonlyArray<number>;

type Coords = [number, number];

function moveCoords(point: Coords, x: number, y: number): Coords {
    point[0] += x;
    point[1] += y;
    return point;
}


const coords: Coords = [0,0];
const moved = moveCoords(coords, 10, 10);

console.log(moved); // [10,10]
console.log(coords);    // [10,10] This input point is mutated

type ReadOnlyCoords = readonly [number, number];
function moveReadOnlyCoords(point: ReadOnlyCoords, x: number, y: number): Coords {
    return [point[0] + x, point[1] + y];
}

const coords1: ReadOnlyCoords = [0, 0];
const moved1 = moveReadOnlyCoords(coords1, 10, 10);
console.log("Read Only: ", moved1); // [10,10]
console.log("Read Only: ", coords1);    // [0,0]
