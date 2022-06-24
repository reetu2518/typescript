function fun<T>(data:T):T {
    return data
}

// console.log(fun("asa"));
// console.log(fun(1));
// console.log(fun({name: "reetu", age: 30}));


enum Days {
    mon, tue, wed, thu, fri, sat, sun
}

// console.log(Days.sat);

function enumFun(data:Days):Days {
    return data   
}

// console.log(enumFun(Days.fri))


let a = Symbol()
console.log(a);

