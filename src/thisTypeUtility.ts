type Mathematics = {
    double(): void,
    half(): void,
};

// ThisType says that the math object is going to point to something that has value of type number
export const math: Mathematics & ThisType<{value: number}> = {
    double() {
        this.value *= 2;
    },
    half() {
        this.value /= 2;
    }
};

const obj = {
    value: 1,
    ...math,
};

obj.double();
console.log(obj.value);  // 2

obj.half();
console.log(obj.value); // 1


type StateDescription<D,M> = {
    data: D;
    methods: M & ThisType<D & M>;
}

// Squashing data and methods into a single object
function createState<D, M> (desc: StateDescription<D, M>) : D & M {
    return { ...desc.data, ...desc.methods };
}

let state = createState({
    data: {
        x: 0,
        y: 0,
    },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx;
            this.y += dy;
        },
    },
});

state.x = 10;
state.y = 20;
state.moveBy(5,5);
