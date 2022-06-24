"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calc = void 0;
function calc(a, b) {
    return b ? a + b : a;
}
exports.calc = calc;
// console.log(calc(100,10));
/** class with data type */
class App {
    constructor(name) {
        this.name = name;
        console.log(name);
    }
    getName(a) {
        return a;
    }
}
let a = new App(11);
console.log(a.getName("string arg"));
