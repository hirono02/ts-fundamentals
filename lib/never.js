"use strict";
// TypeScript returns never for this function because it will never return
const fail = (message) => {
    throw new Error(message);
};
const areaey = (s) => {
    if (s.kind === 'square') {
        return s.size * s.size;
    }
    if (s.kind === 'rectangle') {
        return s.height * s.width;
    }
    if (s.kind === 'circle') {
        return s.radius * s.radius * Math.PI;
    }
    const _ensureAllCasesHandled = s;
    return _ensureAllCasesHandled;
};
