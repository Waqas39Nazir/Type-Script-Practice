// typeof type guards
// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"

const printHandler = (a: number | string): void => {
  // return a;

  if (typeof a === "string") {
    a = a.toUpperCase();
    //   This will not convert the string to lower case
    // the reason is that in JavaScript strings are immutable
    //this expression below will return a new string and you have to assign that to a
    //   a.toLowerCase();
  }

  console.log("Number | String:", a);
};

printHandler(5);

printHandler("Waqas");

const commandMethods = (x: number[] | string) => {
  //   return x.slice(0, 3);

  return x.slice(3, 15);
};

const dummyArray = [3, 6, 9, 3, 12, 15];

const dummyString = "Waqas Nazir";

console.log(commandMethods(dummyArray));
console.log(dummyArray);

console.log(commandMethods(dummyString));
console.log(dummyArray);

const spliceHandler = (x: number[]) => {
  return x.splice(1, 3, 4, 5, 6, 7, 8, 9, 10);
};

//splice only works on arrays
console.log("Splice Method:", spliceHandler(dummyArray));
console.log(dummyArray);
