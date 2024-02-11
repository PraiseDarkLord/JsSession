// Conditional Statements (if-else)
let x = 10;
if (x > 0) {
    console.log("x is positive");
} else if (x < 0) {
    console.log("x is negative");
} else {
    console.log("x is zero");
}

// Switch Statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday, the start of the week.");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("It's a weekday.");
        break;
    case "Friday":
        console.log("It's Friday, almost the weekend!");
        break;
    default:
        console.log("It's the weekend.");
}

// Looping Structures
// For Loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
console.log("While Loop:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Do-While Loop
console.log("Do-While Loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
