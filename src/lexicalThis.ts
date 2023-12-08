class Person {
    private _age: number;
    constructor(_age: number) {
        this._age = _age;
    }

    // No longer driven by calling context
    growOld = () => {
        this._age++;
    }

    age() {
        return this._age;
    }
}

const person = new Person(0);
person.growOld();

// Functions in JS can be stored in a variabel
const growOld = person.growOld;


console.log('age: ', person.age());
