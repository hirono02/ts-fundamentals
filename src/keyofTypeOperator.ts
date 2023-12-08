
type Hoomans = {    
    name: string,
    age: number,
    location: string,
};

const johnBoy: Hoomans = {
    name: 'John',
    age: 35,
    location: 'Perth',
};
// Keyof operator takes a type as input and returns a union of the keys of that type
type HoomansKeys = keyof Hoomans

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
    const value = obj[key];
    console.log('Getting:', key, value);
    return value;
}

const age = logGet(johnBoy, 'age'); // 35

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]): void {
    console.log('Setting:', key, value);
    obj[key] = value;
}

const cheryl: Hoomans = {
    name: 'cheryl',
    age: 30,
    location: 'Singapore',
};

logSet(cheryl, 'age', 21);
console.log("Cheryl's age is: ", cheryl.age);
