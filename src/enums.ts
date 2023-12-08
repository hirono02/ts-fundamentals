// Enums are not a part of standardized JavaScript
// TypeScript works best when we think of it as a Type only addition to JavaScript

enum LoginMode {
    app = 2,
    email = 0,
    social = 1,
}

console.log(LoginMode.email);
console.log(LoginMode.social);

// Lookup and reverse lookup
console.log(LoginMode['app']);  // 2
console.log(LoginMode[2]);  // 'app'

// Get all the keys
const keys = Object.keys(LoginMode);
console.log('Numeric Enums: ', keys);
// Want: ['app', 'email', 'social']
// Got: ['0', '1', '2', 'app', 'email', 'social']

// Enums backed by strings
enum LoginModes {
    app = 'app',
    email = 'email',
    social = 'social'
}

// Get all the keys
const stringKeys = Object.keys(LoginModes);
console.log('String Enum: ', stringKeys);

// Stable over network
console.log('String Enum app: ', LoginModes.app);    // app
