function double(this: {value: number}) {
    this.value = this.value * 2;
}

const valid = {
    value: 10,
    double,
};

valid.double();

const invalid = {
    valve: 10,
    double,
}

// invalid.double(); --> Error
