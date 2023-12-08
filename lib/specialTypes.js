"use strict";
// Both any and unknown are universal supertypes in TS
// This means that all types of variables can be assigned to types unknown and any
let exampleAny;
let exampleUnknown;
// any 
// Lets you do anything without the checks of TypeScript
// Allows easy migration of JavaScript 
exampleAny = 123;
exampleAny = 'Hello';
let anySetBool = exampleAny;
// unknown
// Cannot assign to well defined types and access any methods
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
let someLegacyVariable;
