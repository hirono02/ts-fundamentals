"use strict";
class Person {
    constructor(_age) {
        // No longer driven by calling context
        this.growOld = () => {
            this._age++;
        };
        this._age = _age;
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
