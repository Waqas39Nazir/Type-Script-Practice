// union types

type TVariable = number | string;

let a: TVariable;

a = "Waqas";

a = 45.56;

a = 43;

//bollean assignemt is not possible as a can only have a value wity type number or string
// a = false;

console.log("A:", a);

//object with union type
interface IPerson {
  name: string;
  hasLegs: boolean;
  canFly: boolean;
}

interface IAllien {
  name: string;
  isMonster: boolean;
}

//repeated attributes in the interfaces will only come ones in the object
const person: IPerson | IAllien = {
  name: "Waqas Nazir",
  hasLegs: true,
  canFly: false,
};

console.log("Person:", person);

const semiAnimal: IPerson & IAllien = {
  name: "Virat Kohli",
  hasLegs: true,
  canFly: true,
  isMonster: true,
};

console.log("Semi Animal:", semiAnimal);
