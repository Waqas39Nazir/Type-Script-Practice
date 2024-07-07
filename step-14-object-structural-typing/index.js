"use strict";
let pet;
const dog = { name: "ABC", owner: "XYZ" };
pet = dog;
// pet.petAge = "12";
console.log("Pet:", pet);
const cat = { name: "Manno", owner: "Vicky Khan" };
const printAnimal = (pet) => {
    console.log("Animal name is ", pet.name);
};
printAnimal(dog);
