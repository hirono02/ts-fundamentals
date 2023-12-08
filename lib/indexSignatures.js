"use strict";
const strs = {
    hello: 'world',
};
console.log(strs['hello']); // 'world
const nums = {
    1337: 'leet',
};
console.log(nums[1337]); // 'leet'
const humans = {
    jane: { displayName: 'Jane Doe', email: 'jane@example.com' },
};
humans['john'] = { displayName: 'John Doe', email: 'john@example.com' };
console.log(humans['john']);
delete humans['john'];
const result = humans['missing'];
// console.log(result, result.email);  // Results in a runtime error, result is undefined
