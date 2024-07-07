//Structural Typing on Objects
interface IPet {
  name: string;
  //   owner: string;
  //   petAge?: string;
}

let pet: IPet;

let dog = { name: "ABC", owner: "XYZ" };

pet = dog;

// pet.petAge = "12";

console.log("Pet:", pet);

//Structural Typing of Objects in fucntion parameters

interface IAnimal {
  name: string;
}

const cat = { name: "Manno", owner: "Vicky Khan" };

const printAnimal = (pet: IAnimal) => {
  console.log("Animal name is ", pet.name);
};

printAnimal(dog);

//Compairing Two Functions
let functionA = (a: number) => 0;
let functionB = (a: number, b: string) => 0;

// not possible becuase functonA has 1 parameters where as functionB has two parameters
// functionA = functionB;

//possible becuase functionb has two parameters and functionA has only one and the first paramrter
// in both functions is a number
functionB = functionA;
