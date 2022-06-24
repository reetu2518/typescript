// export
/// <reference path="./Utils.ts"/>
namespace UserUtils {
    export class Users extends Parent implements UserType{
        getName () {
            return this.name;
        }
    }
}

let a = new UserUtils.Users();
a.setName("ABC")
console.log(a.getName())