type ColourString = 'red' | 'blue' | 'yellow' | 'purple';
type ColourRGB = [red: number, green: number, blue: number];
type Colour = ColourString | ColourRGB;

type Theme = Record<string, Colour>;

// satisfies keyword make sures that a particular object conforms to a particular type
const theme = {
    primary: 'red',
    secondary: [0, 255, 0],
    tertiary: 'purple',
} satisfies Theme

const [r,g,b] = theme.secondary;

