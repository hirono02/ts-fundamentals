/**
 * Make all properties in T readonly
 */

export type Readonly<T> = {
    readonly [P in keyof T]?: T[P];
}

type Pooint = { x: number, y: number};

// Same as { readonly x: number, readonly y: number }
type ReadonlyPooint = Readonly<Pooint>;


function makeReadonly<T>(obj: T): Readonly <T> {
    return Object.freeze({...obj});
}

const editablePooint = { x: 0, y: 0};
editablePooint.x = 2;   // { x: 2, y: 0}

const readonlyPooint = makeReadonly(editablePooint);
// readonlyPooint.y = 3 --> Error
