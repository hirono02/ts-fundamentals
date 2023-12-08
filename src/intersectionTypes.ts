type Pointy2D = {
    x: number,
    y: number,
};

// & operator means pointy3D have all the members of Pointy2D and 'z'
// Can chain multiple types with multiple '&' operators
type Pointy3D = Pointy2D & { 
    z: number,
};

type Employee = {
    name: string,
};

type Email = {
    email: string,
};

type Phone = {
    phone: string,
};

// Can extract as a type alias, similar to union
type Contact = 
    & Employee
    & Email
    & Phone;

function contact(details: Contact) {
    console.log(`
    Dear ${details.name}.
    I hope you received our email at ${details.email}.
    We will call you at  ${details.phone} shortly
    `)
}


