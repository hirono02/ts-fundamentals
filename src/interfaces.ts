interface Pointer2D {
    x: number,
    y: number
}

interface Pointer3D extends Pointer2D {
    z: number
}

export const point: Pointer3D = {
    x: 0,
    y: 0,
    z: 0
};
