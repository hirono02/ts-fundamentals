type Mans = Record<string, { name : string, role: string }>;

const mans: Mans = {};
mans['0'] = { name: 'John', role: 'admin'};
mans['1'] = { name: 'Isaac', role: 'owner'};

// mans['2'] = { name: 'Greg' } --> Error: missing property 'role'

// Can use union of literal types as keys for record utility
type Roles = 'admin' | 'owner' | 'manager'

let peopleWithRoles: Record<Roles, string[]> = {
    'owner': ['Jane', 'June'],
    'admin': ['John'],
    'manager': [],
}

// Can use record utility as a shorthand for creating some objects
type Pointey = Record<'x' | 'y', number>;

