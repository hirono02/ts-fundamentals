class Human {
    constructor(
        public name: string,
        public age: number
    ) {
        
    }
}

const adam = new Human('Adam', 120000);
console.log(adam.name, adam.age);   // 'Adam', 120000
