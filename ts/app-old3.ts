export {}
interface userType {
    name : string,
    age : number,
    address : any
}
let obj:userType= {
    name : "name",
    age : 10,
    address: "UK"
}
obj.name = "sds"
console.log(obj.name);

/**
 * union data type
 * by using union data type we can declare more than one data type at once */

let un:string|number = "safsd"
un = 10;
console.log(un);


