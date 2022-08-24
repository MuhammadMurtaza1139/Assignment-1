 /**************  Console.log() Examples  ******************************/
 console.log("Hello World");
console.log(2+8);

console.log('Muhammad Murtaza');
console.log(1);
console.log(true);
console.log(null); ;
console.log([1, 2, 3]);
console.log({name:"Raja", language:"JavaScript", tutorial:1});

 
/**************  Console.table() Examples  ******************************/
 console.table({raja: 'this', marks:34});


 /**************  Console.war() Examples  ******************************/
 console.warn('This is a warning');


 /**************  Using Console.time() and Console.timeEnd()  ******************************/
console.time();
for (i = 0; i < 100; i++) {
}
console.timeEnd();

/**************  document.write  ******************************/
document.write("Hello Word <br>");
document.write(2+8);


/*********************  Variables  ******************************/
var nationality = "Pakistani";
var age = 25;
var isFeePaid = true;
var weight = 60.55;

var age; // Declaration
age = 25; // Initialization


/*********************  Variable Types : 'Let' examples  ******************************/
let age = 25; // Number
let name = "John"; // String
let developer = true;// Boolean
let location = null; // Null
let task; // undefined
let age= 50;
console.log(age); // SyntaxError: identifier "age" has already been declared.



/*********************  Variable Types : 'const' examples  ******************************/
const age = 20;
const job = 'developer';
const name2 // SyntaxError: missing initializer
const num = 10;
num = 20; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property
