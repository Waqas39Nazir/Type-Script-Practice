let JSON_OBJECT = {
  name: "Waqas Nazir",
  fatherName: "Muhammad Nazir",
  age: "26",
};

const JSON_ARRAY: string[] = ["Waqas Nazir", "Muhammad Waqar Nazir"];

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
console.log(
  "Json Array of Objects + Strings:",
  JSON_ARRAY_OF_OBEJCTS_AND_STRINGS
);
console.log("/********* Without Interfaces *********/");

interface JSON_OBJECT_INTERFACE {
  name: string;
  fatherName: string;
  age: string;
}

const JSON_OBJECT_TWO: JSON_OBJECT_INTERFACE = {
  name: "Waqas Nazir",
  fatherName: "Muhammad Nazir",
  age: "26",
};

const JSON_ARRAY_TWO: string[] = ["Waqas Nazir", "Muhammad Waqar Nazir"];

const JSON_ARRAY_OF_OBEJCTS_TWO: JSON_OBJECT_INTERFACE[] = [
  { name: "Waqas Nazir", fatherName: "Muhammad Nazir", age: "26" },

  { name: "Ahsan Nazir", fatherName: "Muhammad Nazir", age: "14" },
];

const JSON_ARRAY_OF_OBEJCTS_AND_STRINGS_TWO: (
  | string
  | JSON_OBJECT_INTERFACE
)[] = [
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
console.log(
  "Json Array of Objects + Strings:",
  JSON_ARRAY_OF_OBEJCTS_AND_STRINGS_TWO
);
console.log("/********* With Interfaces *********/");
