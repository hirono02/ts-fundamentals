type Plus = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
    debugName?: string,
};

const plus: Plus = (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0);
}

plus.debugName = 'Addition Function';

type PointAgainCreator = {
    new (x: number, y: number) : { x: number, y: number},
    new (x: number, y: number, z: number): {x: number, y: number, z: number},
    (x: number, y: number) : { x: number, y: number},
    (x: number, y: number, z: number) : {x : number, y: number, z: number},
    debugName: string,
};


