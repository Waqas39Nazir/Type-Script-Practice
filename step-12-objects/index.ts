const personOne = {
  firstName: "Waqas",
  lastName: "Nazir",
};

console.log("Person One:", personOne);

interface IPerson {
  firstName: String;
  lastName: string;
}

const personTwo: IPerson = {
  firstName: "Muhammad Waqar",
  lastName: "Nazir",
};

console.log("Person Two:", personTwo);
