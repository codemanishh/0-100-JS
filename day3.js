// Arithmetic operators

// let a = 13;
// let b = 10;
// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division
// console.log(a % b); // Modulus
// console.log(a ** b); // Exponentiation

// Assignment operators
// let x = 5;
// x+=3; // x = x + 3;
// console.log(x);
// x-= 3; // x = x - 3;
// console.log(x);  
// x*= 3; // x = x * 3;
// console.log(x);
// x/= 3; // x = x / 3;
// console.log(x);
// x%= 3; // x = x % 3;
// console.log(x);
// x**= 3; // x = x ** 3;
// console.log(x);

// Comparison operators

// let a = 5;
// let b = "5";
// console.log(a == b); // loose equality
// console.log(a === b); // strict equality


// console.log(a != b); // loose inequality
// console.log(a !== b); // strict inequality

// console.log(a > b); // greater than
// console.log(a < b); // less than

// console.log(a >= b); // greater than or equal to
// console.log(a <= b); // less than or equal to        

// Logical operators

// let x = 5;
// let y = 10;
// console.log(x > 0 && y < 0); // AND
// console.log(x > 0 || y < 0); // OR
// console.log(!(x > 0)); // NOT
// console.log((x > 0 && y > 0 )&& x < 5); // AND
// console.log(x > 0 || y < 0 || x < 10); // OR
// console.log(!(x > 0 && y > 0)); // NOT
// console.log(!(x > 0 || y < 0)); // NOT
// console.log(!(x > 0 && y > 0 && x < 10)); // NOT
// console.log(!(x > 0 || y < 0 || x < 10)); // NOT
// console.log(x > 0 && y > 0 && x < 10 && y < 20); // AND
// console.log(x > 0 || y < 0 || x < 10 || y < 20); // OR




// real world example

// let age = 20;
// if (age >= 18 && age <= 65) {
//     console.log("You are eligible to work.");
// }else {
//     console.log("You are too young to work.");
// }

// outro + quick Reacap

// 1. Arithmetic operators: +, -, *, /, %, **
// 2. Assignment operators: =, +=, -=, *=, /=, %=, **=  
// 3. Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// 4. Logical operators: &&, ||, !
// 5. Conditional (ternary) operator: a?b:c

// ternary operator

let age = 20;
let message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message);