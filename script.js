'use strict';

function createCalculator(baseValue) {
    return {
        sum: (value) => (baseValue = baseValue + value),
        sub: (value) => (baseValue = baseValue - value),
        mult: (value) => (baseValue = baseValue * value),
        div: (value) => (baseValue = baseValue / value),
        set: (value) => (baseValue = value),
    };
}

const calc = createCalculator(10);

console.log(calc.sum(100));
console.log(calc.sub(50));
console.log(calc.mult(2));
console.log(calc.set(150));
console.log(calc.div(5));
