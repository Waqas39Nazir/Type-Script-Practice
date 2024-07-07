"use strict";
//call back functions
//when a function is pass as an argument to another function
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callBackFunction = (text) => {
    console.log("Text:", text);
};
const parentFunction = (name, callBackFunction) => {
    callBackFunction(name);
};
parentFunction("Waqas Nazir", callBackFunction);
//Promises
const isNumber = (value) => {
    return new Promise((resolve, reject) => {
        if (typeof value === "number") {
            resolve("The Value is Number");
        }
        else {
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
const axios_1 = __importDefault(require("axios"));
const callAPI = async () => {
    const data = await axios_1.default
        .get("/user/api")
        .then((result) => {
        return result;
    })
        .catch((error) => {
        return error;
    });
};
callAPI();
