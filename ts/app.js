"use strict";
function fun(data) {
    return data;
}
// console.log(fun("asa"));
// console.log(fun(1));
// console.log(fun({name: "reetu", age: 30}));
var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thu"] = 3] = "thu";
    Days[Days["fri"] = 4] = "fri";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
// console.log(Days.sat);
function enumFun(data) {
    return data;
}
// console.log(enumFun(Days.fri))
let a = Symbol();
console.log(a);
