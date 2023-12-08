let str: string;
str = 'whatever you want';

let strLiteral: 'hello';
strLiteral = 'hello';

let templateLiteral: `Example: ${string}`;
templateLiteral = 'Example: hello';
templateLiteral = 'Example: world';
// templateLiteral = 'without example prefix: hello world' --> This throws an error because it did not follow `Example: ${string}`

type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';
type Style = `${Size}-${Color}`;

function applyStyle(style: Style) {
    //...
}
applyStyle('small-primary');
applyStyle('large-secondary');
// applyStyle('med') --> Error because it doesn't follow the template literal
