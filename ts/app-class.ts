export
/** function with data type */
function calc(a:number, b?:number):number {
    return b?a+b:a
}

// console.log(calc(100,10));

/** class with data type */
class App {
    name;
    constructor(name:number) {
        this.name = name
        console.log(name);
        
    }
    getName (a:string):string {
        return a
    }
}

let a = new App(11)
console.log(a.getName("string arg"))
