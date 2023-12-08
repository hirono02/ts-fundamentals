function error(message: string) : never {
    throw new Error(message);
}

// const notAllowed: never = 'some string';    --> Not allowed because never can only be assigned to a never
const allowed: never = error('this is okay');

const example: string = error('I will not return'); // --> because error will never return, this is allowed because example will never be assigned

// Conditional Type
export type NoEmpty<T> = T extends null | undefined ? never : T;
type Example = NoEmpty<string | null>;
type Expanded = NoEmpty<string> | NoEmpty<null>;
type Expanded1 = (string extends null | undefined ? never : string) // --> String can't be assigned to null/undefined
                | (null extends null | undefined ? never : string); // --> Null can be assigned to null/undefined

type Expanded2 = string | never;
type Result = string;
