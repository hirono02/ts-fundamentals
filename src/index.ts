import { isPalindrome } from './modules';

let message: string = 'Hello World';
message += ' again';
console.log(message);

console.log("Madam: " + isPalindrome("madam"));
console.log("Madan: " + isPalindrome("madan"));

console.log(
    'Logged In User:',
    process.env.USER
);

import fs from 'fs';
fs.writeFileSync('hello.txt', 'Hello World');
