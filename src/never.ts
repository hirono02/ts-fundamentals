// TypeScript returns never for this function because it will never return
const fail = (message: string) => {
    throw new Error(message);
}

// Never can also be used as an explicit type annotation in TS
// Only something of type 'never' can be be assigned to something of type 'never'

// let example: never = 123;   // error

type Squarey = {
    kind: 'square',
    size: number
}

type Rectangley = {
    kind: 'rectangle',
    width: number,
    height: number,
}

type Circley = {
    kind: 'circle',
    radius: number,
}

type Shapey =
    | Squarey
    | Rectangley
    | Circley;

const areaey = (s: Shapey) => {
    if (s.kind === 'square') {
        return s.size * s.size;
    }
    if (s.kind === 'rectangle') {
        return s.height * s.width;
    }
    if (s.kind === 'circle') {
        return s.radius * s.radius * Math.PI;
    }
    const _ensureAllCasesHandled: never = s;
    return _ensureAllCasesHandled;
}
