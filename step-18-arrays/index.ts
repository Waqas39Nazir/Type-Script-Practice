// arrays of strings
const arrayOfStrings: string[] = [
  "Waqas Nazir",
  "Waqar Nazir",
  "Hassan Nazir",
  "Ahsan Nazir",
];
console.log("Array of Strings:", arrayOfStrings);

//array of numbers
const arrayOfNumbers: number[] = [1, 3, 6, 3, 4, 63, 2];
console.log("Array of Numbers:", arrayOfNumbers);
// let array2:Array<number> = [1, 2, 3];//alternative correct syntax

//arrays of strings and numbers
const arrayOfStringsAndNumbers: (number | string)[] = [1, 2, 3, "String"];
console.log("Array of Strings and Numbers:", arrayOfStringsAndNumbers);

//array of objects
interface IPerson {
  name: string;
  age: string;
}

// const arrayOfObjects: IPerson[] = []; success
const arrayOfObjects: IPerson[] = [
  { name: "Waqas Nazir", age: "26" },
  { name: "Muhammad Waqar Nazir", age: "23" },
];

console.log("Array Of Objects:", arrayOfObjects);
