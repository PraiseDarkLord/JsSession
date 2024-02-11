// Creating and manipulating arrays
let fruits = ["apple", "banana", "orange"];

// Accessing elements in an array
console.log("First fruit:", fruits[0]); // Output: "apple"
console.log("Second fruit:", fruits[1]); // Output: "banana"
console.log("Last fruit:", fruits[fruits.length - 1]); // Output: "orange"

// Adding elements to the end of the array
fruits.push("grape");
console.log("Fruits after adding grape:", fruits); // Output: ["apple", "banana", "orange", "grape"]

// Removing the last element from the array
let removedFruit = fruits.pop();
console.log("Fruits after removing last element:", fruits); // Output: ["apple", "banana", "orange"]
console.log("Removed fruit:", removedFruit); // Output: "grape"

// Iterating through arrays
console.log("Fruits:");
fruits.forEach(function (fruit, index) {
    console.log(index + 1 + ". " + fruit);
});

// Understanding objects and object literals
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

// Accessing object properties
console.log("Name:", person.name); // Output: "John"
console.log("Age:", person.age); // Output: 30
console.log("Is student?", person.isStudent ? "Yes" : "No"); // Output: "No"

// Modifying object properties
person.age = 35;
console.log("Updated age:", person.age); // Output: 35

// Adding new properties to the object
person.city = "New York";
console.log("City:", person.city); // Output: "New York"

// Deleting properties from the object
delete person.isStudent;
console.log("Updated person object:", person); // Output: { name: "John", age: 35, city: "New York" }
