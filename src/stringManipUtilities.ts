 type abba = Uppercase<'abba'>; // ABBA
 type Loud = 'HELLO FAM';
 type Quite = Lowercase<Loud>;  // 'hello fam'

 type Hello = "hello ching chong";
 type BetterHello = Capitalize<Hello>;  // 'Hello ching chong'

 type UncomfortableGreeting = Uncapitalize<Loud>    // 'hELLO FAM'


 // These are mostly used by combining them with TS literal types

 type Getter<T extends string> = `get${Capitalize<T>}`;
 type Setter<T extends string> = `set${Capitalize<T>}`;

 type Name = 'name';
 
 type GetName = Getter<Name>;
 type SetName = Setter<Name>;
