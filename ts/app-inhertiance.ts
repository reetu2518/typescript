export
/** inhertiance with data type */
class Parents{
    name;
    setName (name):void {
        this.name = name
    }
}
class App extends Parents {
    getName ():string {
        return this.name
    }
}

let a = new App()
a.setName("set name = ABC")
console.log(a.getName())
