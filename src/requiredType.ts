/**
 * Make all properties in T required using the -? identifiers
 */
// Built-in function
// export type Required<T> = {
//     [P in keyof T]-?: T[P];
// }

type CircleConfig = {
    color?: string,
    radius?: number,
}

class Circles {
    private config: Required<CircleConfig>;

    constructor(config: CircleConfig) {
        this.config = {
            color: config.color ?? 'green',
            radius: config.radius ?? 0
        }
    }

    draw() {
        console.log(
            'Drawing a circle.',
            'Color: ', this.config.color,
            'Radius: ', this.config.radius,
        );
    }
}

