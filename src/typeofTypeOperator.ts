const central = {
    x: 0,
    y: 0,
    z: 0
};

type Pointee = typeof central; // -> Can be used inline as well

const centerUnit: Pointee = {
    x: central.x + 1,
    y: central.y + 1,
    z: central.z + 1,
}
