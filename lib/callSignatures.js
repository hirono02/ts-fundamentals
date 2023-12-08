"use strict";
const plus = (a, b, c) => {
    return a + b + (c != null ? c : 0);
};
plus.debugName = 'Addition Function';
