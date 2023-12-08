"use strict";
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const adam = new Human('Adam', 120000);
console.log(adam.name, adam.age); // 'Adam', 120000
