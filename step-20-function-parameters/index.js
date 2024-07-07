"use strict";
//function with parameters
const addTwoNumbers = (a, b) => {
    return a + b;
};
console.log("Sum of Two Numbers:", addTwoNumbers(3, 3));
//function with optional parameters
const functionA = (a, b, c) => {
    if (c) {
        return a * b * c;
    }
    return a * b;
};
console.log("Multiplication of Two Numbers:", functionA(3, 3));
console.log("Multiplication of Three Numbers:", functionA(3, 3, 3));
//function with default parameters
const functionB = (a, discount = 0.25) => {
    return a * (1 - discount);
};
console.log("Default Function Parameter:", functionB(100));
//function with rest parameters
const calculateAverage = (...rest) => {
    const sum = rest.reduce((a, b) => {
        return a + b;
    });
    return sum;
};
console.log("Function with Rest Parameters:", calculateAverage(2, 2, 3, 3));
