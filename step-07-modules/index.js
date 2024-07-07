"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addNumber_1 = __importDefault(require("./addNumber"));
// import { a, b } from "./secondFile";
// import num from "./secondFile";
const secondFile_1 = require("./secondFile");
// console.log(addNumber(a, b));
// console.log(addNumber(num.a, num.b));
console.log((0, addNumber_1.default)(secondFile_1.num.a, secondFile_1.num.b));
