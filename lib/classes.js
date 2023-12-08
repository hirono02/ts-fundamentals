"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} move ${distanceInMeters}m.`);
    }
}
let cat = new Animal('cat');
cat.move(10);
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
