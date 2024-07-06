# Type-Script-Practice

Primitive TyepScript types:

1. null
2. undefined
3. boolean // true or false
4. string // "", "Hello World"
5. number // 0, 5.1, -9
6. bigint // 0n, 5n, -10n
7. symbol // Symbol(), Symbol("hi"),

Steps

1. Install typescript globally using npm package
   command: npm install -g typescript

2. Create tsconfig.json file by runing this command
   tsc --init

3. Change tsconfig.json file configuration

   1. "target": "ES2022"
   2. "module": "NodeNext"
   3. "moduleResolution": "NodeNext"

4. Install @types/node for typscript
   command npm install --dev @types/node

5. Transpile JavaScript by running (create a JavaScript file for TypeScript):
   command: tsc

Note: index.js will be entry point file because we will convert code written in typescript to JavaScript because browser only understand JavaScript
