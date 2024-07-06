let message = "Waqas Nazir";

// message = 6; // Type 'number' is not assignable to type 'string'.

//The better aprroach to write the above code is
let message2: string = "Waqas Nazir";

// message2 = { name: "Waqas" }; //Type '{ name: string; }' is not assignable to type 'string'.

console.log("Message:", message);
console.log("Message 2:", message2);
