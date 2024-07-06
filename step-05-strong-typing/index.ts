// No type annotation needed -- 'dummyName' inferred as type 'string'
const dummyName = "Waqas";

// Type Annotations on Variables
const personName: string = "Waqas Nazir";

console.log("Person Name:", personName);

interface IPeron {
  firstName: string;
  lastName: string;
  age?: number;
}

const personOne: IPeron = {
  firstName: "Waqas",
  lastName: "Nazir",
};

console.log("Person One:", personOne);

const personTwo: IPeron = {
  firstName: "Waqas",
  lastName: "Nazir",
  age: 26,
};

console.log("Person Two:", personTwo);

let age: number = 26;

console.log("Age:", age);

age = 20;

console.log("Age:", age);

let isDeveloper: boolean = true;

console.log("isDeveloper:", isDeveloper);

//Arrays
const nameArray: string[] = ["Waqas", "Waqar", "Hassan", "Ahsan"];

// Note: number[] (Used for Arrays) and [number](Used for Tuples) are a different things

console.log("Name Array:", nameArray);

//Functions
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

const concactStrings = (str1: string, str2: string): string => {
  //   return str1 + " " + str2;
  return str1.concat(` ${str2}`);
};

console.log("Add Numbers:", addNumbers(4, 10));

console.log("Concact Strings:", concactStrings("Waqas", "Nazir"));

//Functions that return a Promise
const myFunction = (num: number): Promise<number> => {
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
