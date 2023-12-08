type Animals = {
    name: string,
    voice(): string,
}

const showAnimal = (animal: Animals) => {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

class Cat implements Animals {
    constructor(
        public name: string,
    ) {}
    voice() {
        return 'meow';
    }
}

class Dog implements Animals {
    constructor(
        public name: string,
    ) {}
    voice() {
        return 'woof';
    };
}
