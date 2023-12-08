type CardinalDirection = 'North' | 'East' | 'South' | 'West';

let direction: CardinalDirection;
// Typescript allows us to use any string literal in a type position

direction = 'North';
// Throws a compile time error
// direction = 'n0r7h';

function move(distanceMeters: number, direction: CardinalDirection) {
    console.log(`Moving ${distanceMeters} meters ${direction}.`);
}

move(25, 'North');

// Typescript also supports type literals for booleans as well as number value

type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function rollingDice() {
    return (Math.floor(Math.random() * 6) + 1) as Dice;
}
// Won't ever happen
// if (rollDice === 7) {
//     throw new Error('Impossible number');
// }
