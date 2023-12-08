// Takes a string and adds `padding` to the left
// If `padding` is a number, that is the number of spaces added to the left
// If `padding` is a string, then `padding` is appended to the left

// You can extract a union type into it's own type alias
// The pipe before the first type is a TS feature for readability
type Padding = 
    | number 
    | string;

function padLeft(value: string, padding: Padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }

    throw new Error(`Expected number or string, got '${padding}'.`);
}
