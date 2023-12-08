type Man = {
    name: string,
    email: string,
    phone?: string | null | undefined, // Optional Member
}

const bruce: Man = {
    name: 'Bruce',
    email: 'bruce@dog.com',
    phone: '91234565',
};

const alfred: Man = {
    name: 'Alfred',
    email: 'alfred@batman.com',
    // phone cannot be other types, only undefined and string if no union types
};

console.log(alfred.phone);  // undefined


class Pokemon {
    name? : string;
    pokedex?: number;
    type?: string[] | string;
}

const pikachu = new Pokemon();
console.log(pikachu.name);  // undefined

// null is not considered an optional value
// pikachu.name = null  // throws an error unless using union type
let bulbasaur: Pokemon;

function initialize() {
    bulbasaur = {
        name: "Bulbasaur",
        pokedex: 1,
        type: ["Grass", "Poison"]
    }
}

initialize();
// TypeScript does not do deep code flow analysis
// Does not understand the impact of calling the initialize function
// Using a non null assertion operator '!', so we use a postfix non null assertion
// Compile time only and have no runtime impact
console.log('After Initialization: ', bulbasaur!.name);

// best to avoid, best practice is to let the function return the object instead

function correctInitialize(): Pokemon {
    return {name:"Charmander", pokedex: 4, type: "Fire"}
}

const charmander = correctInitialize();
console.log("After Correct Initialization: ", charmander.name);

function sendEmail(email: string) {
    console.log('Sent email to', email);
}

function ensureContactable(person: Man) {
    if (person.phone == null) throw new Error(`Person ${person.name} is uncontactable`);
}

function contact(person: Man) {
    ensureContactable(person);
    sendEmail(person.phone!);   // Non null assertion because we have enforced that it will not be bull
}
