"use strict";
const showAnimal = (animal) => {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
};
class Cat {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return 'meow';
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return 'woof';
    }
    ;
}
