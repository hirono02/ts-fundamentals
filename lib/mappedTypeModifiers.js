"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
// Use Case
class State {
    constructor(current) {
        this.current = current;
    }
    update(next) {
        this.current = { ...this.current, ...next };
    }
}
exports.State = State;
const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
state.update({ x: 24 });
state.update({ x: 21, y: 44 });
console.log(state.current);
