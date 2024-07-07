"use strict";
//anonymous functuions => The function without name are known as anonymous functions
//assigning function to a variable
//function with key word function is anonymous function
const functionA = function (a) {
    return a;
};
//arrow function is also anonymous function
const functionB = (str) => {
    return str;
};
console.log("Anonymous Function A:", functionA(15));
console.log("Anonymous Function B:", functionB("Waqas Nazir"));
//Anonymous Functions as arguments
const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const createMultipleOf3 = dummyArray.map(function (value) {
    return value * 3;
});
console.log("3's Multiples:", createMultipleOf3);
const createMultipleOf4 = dummyArray.map((value) => {
    return value * 4;
});
console.log("4's Multiples:", createMultipleOf4);
//Named Functions
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(4, 4));
