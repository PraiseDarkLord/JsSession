// Function Declaration
function greetDeclaration(name) {
    return "Hello, " + name + "!";
}

// Function Expression
let greetExpression = function (name) {
    return "Hello, " + name + "!";
};

// Arrow Function (introduced in ES6)
let greetArrow = (name) => {
    return "Hello, " + name + "!";
};

// Parameters and Arguments
function add(a, b) {
    return a + b;
}

let result = add(3, 5); // Passing arguments 3 and 5 to the add function
console.log("Result of addition:", result);

// Return Statement
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let number = 7;
if (isEven(number)) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

// Calling Functions
console.log(greetDeclaration("John")); // Calling function declaration
console.log(greetExpression("Alice")); // Calling function expression
console.log(greetArrow("Bob")); // Calling arrow function