"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let JSON_OBJECT = {
    name: "Waqas Nazir",
    fatherName: "Muhammad Nazir",
    age: "26",
};
const JSON_ARRAY = ["Waqas Nazir", "Muhammad Waqar Nazir"];
const JSON_ARRAY_OF_OBEJCTS = [
    { name: "Waqas Nazir", fatherName: "Muhammad Nazir", age: "26" },
    { name: "Ahsan Nazir", fatherName: "Muhammad Nazir", age: "14" },
];
const JSON_ARRAY_OF_OBEJCTS_AND_STRINGS = [
    "Waqas Nazir",
    { name: "Waqas Nazir", fatherName: "Muhammad Nazir", age: "26" },
    "Waqar Nazir",
    "Hassan Nazir",
    {
        name: "Ahsan Nazir",
        fatherName: "Muhammad Nazir",
        age: "14",
        dob: "24-04-2000",
    },
];
console.log("/********* Without Interfaces *********/");
console.log("Json Object:", JSON_OBJECT);
console.log("Json Array :", JSON_ARRAY);
console.log("Json Array of Objects:", JSON_ARRAY_OF_OBEJCTS);
console.log("Json Array of Objects + Strings:", JSON_ARRAY_OF_OBEJCTS_AND_STRINGS);
console.log("/********* Without Interfaces *********/");
const JSON_OBJECT_TWO = {
    name: "Waqas Nazir",
    fatherName: "Muhammad Nazir",
    age: "26",
};
const JSON_ARRAY_TWO = ["Waqas Nazir", "Muhammad Waqar Nazir"];
const JSON_ARRAY_OF_OBEJCTS_TWO = [
    { name: "Waqas Nazir", fatherName: "Muhammad Nazir", age: "26" },
    { name: "Ahsan Nazir", fatherName: "Muhammad Nazir", age: "14" },
];
const JSON_ARRAY_OF_OBEJCTS_AND_STRINGS_TWO = [
    "Waqas Nazir",
    { name: "Waqas Nazir", fatherName: "Muhammad Nazir", age: "26" },
    "Waqar Nazir",
    "Hassan Nazir",
    { name: "Ahsan Nazir", fatherName: "Muhammad Nazir", age: "14" },
];
console.log("/********* With Interfaces *********/");
console.log("Json Object:", JSON_OBJECT_TWO);
console.log("Json Array :", JSON_ARRAY_TWO);
console.log("Json Array of Objects:", JSON_ARRAY_OF_OBEJCTS_TWO);
console.log("Json Array of Objects + Strings:", JSON_ARRAY_OF_OBEJCTS_AND_STRINGS_TWO);
console.log("/********* With Interfaces *********/");
