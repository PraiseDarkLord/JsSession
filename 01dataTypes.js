// Using var
var ageVar = 25;
console.log("Age (var):", ageVar); // Output: 25

// Redeclaring var
var ageVar = 30;
console.log("Age (var, redeclared):", ageVar); // Output: 30 (no error, var allows redeclaration)

// Using let
let ageLet = 25;
console.log("Age (let):", ageLet); // Output: 25

// Redeclaring let (throws error)
// let ageLet = 30; // SyntaxError: Identifier 'ageLet' has already been declared
// console.log("Age (let, redeclared):", ageLet);

// Using const
const ageConst = 25;
console.log("Age (const):", ageConst); // Output: 25

// Trying to reassign const (throws error)
// ageConst = 30; // TypeError: Assignment to constant variable.
// console.log("Age (const, reassigned):", ageConst);



// Variable declaration
var age = 25; // Number
var name = "John"; // String
var isStudent = true; // Boolean
var person = null; // Null
var job; // Undefined


console.log("Hello, world!");

// Logging variables to console
console.log("Number variable:", age);
console.log("String variable:", name);
console.log("Boolean variable:", isStudent);
console.log("Null variable:", person);
console.log("Undefined variable:", job);


// Reassigning a variable
age = 30;
console.log("Updated Age:", age); // Output: Updated Age: 30

// Data type conversion
var x = "10";
var y = "20";
var z = x + y; // Concatenation, not addition
console.log("String Concatenation:", z); // Output: String Concatenation: 1020

x = parseInt(x);
y = parseInt(y);
z = x + y; // Addition after conversion
console.log("Numeric Addition:", z); // Output: Numeric Addition: 30