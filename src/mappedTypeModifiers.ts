
export type Point3 = {
    readonly x: number,
    y?: number,
}

export type Mapped<T> = {
    +readonly [P in keyof T]?: T[P];
};

export type Result = Mapped<Point3>;


// Use Case
export class State<T> {
    constructor(public current: T) { }
    update(next: Partial<T>) {
        this.current = {...this.current, ...next};
    }
}

const state = new State({x: 0, y: 0});
state.update({ y: 123 });
state.update({ x: 24 });
state.update({ x: 21, y: 44 });
console.log(state.current);
