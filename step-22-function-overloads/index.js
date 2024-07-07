"use strict";
//function overloads
function add(name, ...args) {
    return `${name}: ${args.join(" ")}`;
}
console.log(add("Waqas", "Human", "Developer"));
console.log(add("Muhammad Waqar", "Human", "Clerk", "Nai"));
console.log(add("Waqas", "Human", "Developer", "Lun hy", "Mota bhi hy"));
