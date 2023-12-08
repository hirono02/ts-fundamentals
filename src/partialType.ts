/**
 * Make all properties in T optional
 */

// Built-in function
// export type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

type Pointies = { x: number, y: number };
type PartialPointies = Partial<Pointies>; // --> Same as { x?: number, y?: number};

class State1<T> {
    constructor(
        public current: T,
    ) {}
    
    update(next: Partial<T>) {
        this.current = {...this.current, ...next};
    }
}

// Usage
const state = new State1({
    x: 0,
    y: 0,
});
state.update({y: 123}); // --> Partial, no need to provide x value
console.log(state.current);
