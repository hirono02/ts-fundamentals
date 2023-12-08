export type Name = { name: string };
export type Age = { age: number };

type Union = Name | Age | Name & Age;
type Intersection = Name & Age;

const name = { name: "Isaac" };
const age = { age: 29 };
const nameAndAge = { name: "Isaac", age: 29 };

// Union
let union: Union;
union = name;
union = age;
union = nameAndAge; // Lucky coincidence, union is not designed to support this use case

function filter(union: Union) {
  if ("name" in union) {
    console.log(union.name);
  }
  if ("age" in union) {
    console.log(union.age);
  }
  if ("name" in union && "age" in union) {
    console.log(union.name); // Error: never
    console.log(union.age); // Error: never
  }
}

// Intersection (Only accept objects with all properties defined in its type)
let intersection: Intersection;
intersection = nameAndAge;
// intersection = name; // Error
// intersection = age;  // Error
