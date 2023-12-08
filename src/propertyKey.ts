// Only a string, number, or symbol, can be used as a key in JS
const stri: string = 'key';
const n: number = 1337;
const symb: symbol = Symbol();

const validity = {
    [str]: 'valid',
    [n]: 'valid',
    [symb]: 'valid',
}

const objs = {};

/**
 * Runtime converts anything other than string, number, or symbol into a string, giving unpredictable results, and therefore throws a compile time error
 */
const noValid = {
    // [objs]: 'invalid',
}


let example: PropertyKey;
example = stri;
example = n;
example = symb;
// example = objs --> Error
