"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
const Teacher_1 = __importDefault(require("./Teacher"));
let st = new Student_1.default();
let te = new Teacher_1.default();
console.log(st.data);
console.log(te.data);
