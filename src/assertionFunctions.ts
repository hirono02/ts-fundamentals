type Woman = {
    name: string,
    dateOfBirth?: Date,
};

function loadPerson() {
    return { name: 'Rosa Parks'};
}

// Mostly used when writing application tests

// This tells the TS compiler that the function only returns if condition is true
function assert(condition: unknown, message: string): asserts condition {
    if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
    if (value instanceof Date) return;
    else throw new TypeError('value is not a Date');
}




