
/** 
 * { 
 *  name: (value: string) => void;
 *  age: (value: string) => void;
 * }
 */

type Setters<T> = {
  [K in keyof T & string as `set${Capitalize<K>}`]: (value: T[K]) => void;
};

type Getters<T> = {
    [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K];
}

export type Store<State> = Setters<State> & Getters<State>;

type PersonState = {
    name: string;
    age: number;
};

type PersonStore = Store<PersonState>;
