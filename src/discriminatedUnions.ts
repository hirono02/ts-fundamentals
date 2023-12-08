type Squares = {
    kind: 'square',
    size: number,
};

type Rect = {
    kind: 'rectangle',
    width: number,
    height: number,
};

type Circle = {
    kind: 'circle',
    radius: number,
};

type Shapes = 
    | Circle
    | Rect
    | Squares;

function calcArea(shape: Shapes) {
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    if (shape.kind === 'circle') {
        return shape.radius * shape.radius * Math.PI;
    }
}


type ValidationSuccess = {
    isValid: true,
    validatedValue: string,
};

type ValidationFailure = {
    isValid: false,
    errorReason: string,
};

type Validation =
    | ValidationSuccess
    | ValidationFailure;

function logResult(result: Validation) {
    if (result.isValid) {
        console.log('Success, validated value: ', result.validatedValue);
    }
    if (!result.isValid) {
        console.error("Failure, error reason: ", result.errorReason);
    }
}

