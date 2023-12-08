const strs = {
    hello: 'world',
};

console.log(strs['hello']); // 'world

const nums = {
    1337: 'leet',
};

console.log(nums[1337]);    // 'leet'

type Dictionary = {
    [key: string]: boolean,
}

type Mankind = {
    displayName: string,
    email: string,
};

type MankindDictionary = {
    [username: string]: Mankind | undefined,
    jane: Mankind,  // this requires every Mankind dictionary to have a jane object in it
};

const humans: MankindDictionary = {
    jane: { displayName: 'Jane Doe', email: 'jane@example.com'},
};

humans['john'] = { displayName: 'John Doe', email: 'john@example.com' };
console.log(humans['john']);
delete humans['john'];

const result = humans['missing'];
// console.log(result, result.email);  // Results in a runtime error, result is undefined
