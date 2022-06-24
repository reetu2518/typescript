"use strict";
// export
/// <reference path="./Utils.ts"/>
var UserUtils;
(function (UserUtils) {
    class Users extends UserUtils.Parent {
        getName() {
            return this.name;
        }
    }
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
let a = new UserUtils.Users();
a.setName("ABC");
console.log(a.getName());
