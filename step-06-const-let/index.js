"use strict";
//Var
const varFunction = () => {
    var a = 10;
    console.log("A:", a);
    if (true) {
        var a = 90;
        console.log("A:", a);
    }
    console.log("A:", a);
};
varFunction();
function exampleVar() {
    //   console.log(a); // undefined (hoisted)
    var a = 10;
    console.log(a); // 10
    if (true) {
        var a = 20;
        console.log(a); // 20 (same variable, function-scoped)
    }
    console.log(a); // 20
}
exampleVar();
