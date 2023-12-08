"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
const queue = new Queue();
queue.push(123);
