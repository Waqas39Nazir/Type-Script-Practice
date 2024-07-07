//anonymous
const personOne: { name: string; age: string } = {
  name: "Waqas Nazir",
  age: "26",
};

console.log("Person One:", personOne);

//object aliased
type IPeron1 = {
  name: string;
  age: string;
};

const personTwo: IPeron1 = {
  name: "Waqas Nazir",
  age: "26",
};

console.log("Person Two:", personTwo);

//object interfaces
interface IPerson2 {
  name: string;
  age: string;
}

const personThree: IPerson2 = {
  name: "Muhammad Waqar Nazir",
  age: "26",
};

console.log("Person Three:", personThree);

//Note: interface is only used for objects whereas type can use for objects and other types as well
