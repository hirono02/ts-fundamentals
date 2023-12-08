// Interface
/* 
Features Supported by Interface:
- Declaration Merging
- Familiarity (Extends)
*/
export interface InputProps {
    type: 'text' | 'email',
    value: string,
    onChange: (newValue: string) => void,
}

// Type
/* 
Features Supported by Types:
- Unions
- Intersections (&)
- Primitives
- Shorthand Functions
- Advanced Type Functions
*/
type InputValue = string;
type InputType = 'text' | 'email';
type InputOnChange = (newValue: InputValue) => void;
export type InputProp = {
    type: InputType,
    value: InputValue,
    onChange: (newValue: string) => void;
}
