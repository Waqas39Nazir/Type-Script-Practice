//function overloads

//signautures for functions
function add(name: string, str1: string, str2: string): string;
function add(name: string, str1: string, str2: string, str3: string): string;
function add(
  name: string,
  str1: string,
  str2: string,
  str3: string,
  str4: string
): string;

//function implementation
function add(name: string, ...args: string[]): string {
  return `${name}: ${args.join(" ")}`;
}

console.log(add("Waqas", "Human", "Developer"));

console.log(add("Muhammad Waqar", "Human", "Clerk", "Nai"));

console.log(add("Waqas", "Human", "Developer", "Lun hy", "Mota bhi hy"));
