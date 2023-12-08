// Optional
type ExampleOptional = {
    name?: string;
};

let optional: ExampleOptional;
optional = { name: undefined };
optional = {};

// Required property, value can be undefined
type ExampleUnion = {
    name: string | undefined;
};

let union: ExampleUnion;
union = { name: undefined };
// union = {}; --> Error: name is missing


function logOptional(message?: string) {
    console.log(message);
}

function logUnion(message: string | undefined) {
    console.log(message);
}

// Can be invoked with undefined or no value 
logOptional(undefined);
logOptional();

// Can't be invoked without a value
logUnion(undefined);
// logUnion();  --> Error: Requires a value, 1 argument is expected

// A required paramter cannot follow an optional parameter
// function logOptional(error? : Error, message: string)

function logUnions(error: Error | undefined, message: string) {
    if (error != undefined) {
        console.error(error, message);
    } else {
        console.log(message);
    }
}
