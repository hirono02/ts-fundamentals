/* 
Mapped types consist of 3 key portions
1. A loop variable
2. A union of types to loop over
3. Output type
*/

export type Point2 = {
    x: number,
    y: number,
    z: number,
}


const center2: Readonly<Point2> = {
    x: 0,
    y: 0,
    z: 0,
}
