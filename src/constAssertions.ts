const king = 'elvis';
// king = 'john';  --> This throws an error
const upperCased = king.toUpperCase();  // king === 'elvis', strings are immutable

const dave = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbanging'],
} as const; // --> const assertion

/*
const assertion does 3 things
1. Converts primitives to literal (string -> 'dave')
2. Converts any members to readonly members
3. Converts any arrays to readonly tuples
*/

// dave.name = 'grohl'; --> won't work
// dave.role = 'singer'; --> won't work
// dave.skills.unshift('singing'); --> won't work

function layout(settings: {
    align: 'left' | 'center'| 'right',
    padding: number,
}) {
    console.log('Performing layout:', settings);
}

const layoutExample = {
    align: 'left',
    padding: 0,
} as const;

layout(layoutExample);

