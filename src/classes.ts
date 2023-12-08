class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} move ${distanceInMeters}m.`);
    }
}

let cat = new Animal('cat');
cat.move(10);

class Bird extends Animal {
    fly(distanceInMeters: number) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
 