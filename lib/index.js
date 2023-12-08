"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("./modules");
let message = 'Hello World';
message += ' again';
console.log(message);
console.log("Madam: " + (0, modules_1.isPalindrome)("madam"));
console.log("Madan: " + (0, modules_1.isPalindrome)("madan"));
console.log('Logged In User:', process.env.USER);
const fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync('hello.txt', 'Hello World');
