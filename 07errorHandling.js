// Function to divide two numbers
function divide(a, b) {
    try {
        // Attempting to divide a by b
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        // Catching and handling the error
        console.error("An error occurred:", error.message);
    }
}

// Example usage of the divide function
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: An error occurred: Division by zero is not allowed.
