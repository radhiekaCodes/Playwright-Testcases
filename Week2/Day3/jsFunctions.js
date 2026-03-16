// Learning Objective:
// Understand different ways to declare functions in JavaScript and how to use callback functions.
// Assignment Details:
// Complete the following tasks to practice function declarations, arrow functions, anonymous
// functions, and callback functions in JavaScript

// Assignment Requirements:
// Task 1: Function Declaration
// Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
// <name>!" to the console.

function userProfile(name){
    console.log(`Hello ${name}!!!`)
}

userProfile('John Doe')
// Task 2: Arrow Function
// Create an arrow function named `double` that takes a number as a parameter and returns
// double its value.

const double = (num) => num* 2

console.log(double(3))
// Task 3: Anonymous Function
// Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
// after 2 seconds.

setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Task 4: Callback Function
// Create a function named `getUserData` that takes a callback function as a parameter. Inside
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
// that should print “Call Back Function” after 3 seconds.
// Call the `getUserData` function and log message using the callback function.

function getUserData(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

getUserData(function () {
    console.log("Call Back Function");
});
