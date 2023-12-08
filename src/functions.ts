function log(message: string): void {
    console.log('LOG: ', message);
}

function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current;
    })
}
// TypeScript allows first class functions
// Can store functions in a JS variable
// Anything that is used as a type annotation can be a Type Alias
type Add = (a: number, b: number) => number;
let add: Add = (x,y) => x + y;

console.log(sum(1,2));
console.log(sum(1,2,3));
