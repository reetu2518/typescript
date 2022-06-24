"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parents = void 0;
class Parents {
    setName(name) {
        this.name = name;
    }
}
exports.Parents = Parents;
class App extends Parents {
    getName() {
        return this.name;
    }
}
let a = new App();
a.setName("set name = ABC");
console.log(a.getName());
