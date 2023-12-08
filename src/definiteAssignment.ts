// Definite Assignment Assertion is a postfix exclamation mark at the point of declaration
// Compile time only
let dice!: number;

function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
rollDice();
console.log("Value after roll:", dice);


class Point3 {
    x!: number;
    y!: number;
    constructor() {
        this.moveRandom();
    }

    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
