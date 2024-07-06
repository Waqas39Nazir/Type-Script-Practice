"use strict";
// No type annotation needed -- 'dummyName' inferred as type 'string'
const dummyName = "Waqas";
// Type Annotations on Variables
const personName = "Waqas Nazir";
console.log("Person Name:", personName);
const personOne = {
    firstName: "Waqas",
    lastName: "Nazir",
};
console.log("Person One:", personOne);
const personTwo = {
    firstName: "Waqas",
    lastName: "Nazir",
    age: 26,
};
console.log("Person Two:", personTwo);
let age = 26;
console.log("Age:", age);
age = 20;
console.log("Age:", age);
let isDeveloper = true;
console.log("isDeveloper:", isDeveloper);
//Arrays
const nameArray = ["Waqas", "Waqar", "Hassan", "Ahsan"];
// Note: number[] (Used for Arrays) and [number](Used for Tuples) are a different things
console.log("Name Array:", nameArray);
//Functions
const addNumbers = (a, b) => {
    return a + b;
};
const concactStrings = (str1, str2) => {
    //   return str1 + " " + str2;
    return str1.concat(` ${str2}`);
};
console.log("Add Numbers:", addNumbers(4, 10));
console.log("Concact Strings:", concactStrings("Waqas", "Nazir"));
//Functions that return a Promise
const myFunction = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num === "number") {
            resolve(num);
            //   reject("Error");
        }
        // else {
        //   reject("Error");
        // }
    });
};
myFunction(9)
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error);
});
