import { MemberExpression } from "typescript";

type IsArray<T> =
    T extends Array<infer Member>
    ? 'array'
    : 'other';

type WithArray = IsArray<string[]>;
type WithNoArray = IsArray<number>;

// Infer keyword can be thought of as a way to create variables in a function

type UnboxArray<T> =
    T extends Array<infer Member>
    ? Member
    : T;

type UnboxedStringArray = UnboxArray<string[]>;
type UnboxedNumberArray = UnboxArray<number[]>;
type AnythingElse = UnboxArray<string>;

export function createPerson(firstName: string, lastName: string) {
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    };
}

function logPerson(person: ReturnType<typeof createPerson>) {
    console.log(
        'Person:',
        person.firstName,
        person.lastName,
        person.fullName,
    );
}
