let myname: unknown = "Waqas Nazir";
console.log((myname as string).length);
console.log((<string>myname).length);
