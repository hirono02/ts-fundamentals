"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function error(message) {
    throw new Error(message);
}
// const notAllowed: never = 'some string';    --> Not allowed because never can only be assigned to a never
const allowed = error('this is okay');
const example = error('I will not return'); // --> because error will never return, this is allowed because example will never be assigned
