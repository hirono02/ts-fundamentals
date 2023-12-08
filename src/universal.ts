function load(value: unknown) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2))
    } else {
        console.log(value);
    };
}
