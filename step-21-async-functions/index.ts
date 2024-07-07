//call back functions
//when a function is pass as an argument to another function

const callBackFunction = (text: string): void => {
  console.log("Text:", text);
};

const parentFunction = (
  name: string,
  callBackFunction: (text: string) => void
) => {
  callBackFunction(name);
};

parentFunction("Waqas Nazir", callBackFunction);

//Promises
const isNumber = (value: string | number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (typeof value === "number") {
      resolve("The Value is Number");
    } else {
      reject("The Value is Not Number");
    }
  });
};

isNumber(15)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//async await

import axios from "axios";

const callAPI = async () => {
  const data = await axios
    .get("/user/api")
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

callAPI();
