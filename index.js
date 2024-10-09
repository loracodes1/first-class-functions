// 1. Function expression assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Lora")); // Output: Hello, Lora!

//2. STORE FUNCTIONS IN DATA STRUCTURES
// Storing functions in an array
const functionArray = [
    function() { return "Function 1"; },
    function() { return "Function 2"; },
    function() { return "Function 3"; }
];

console.log(functionArray[0]()); // Output: Function 1

// Storing functions in an object
const functionObject = {
    func1: function() { return "Hello from func1"; },
    func2: function() { return "Hello from func2"; }
};

console.log(functionObject.func1()); // Output: Hello from func1


//3.FUNCTIONS THAT RETURN OTHER FUNCTIONS 
//Functions can return other functions, allowing you to create higher-order functions.
function outerFunction() {
    return function innerFunction() {
        return "I'm the inner function";
    };
}

const inner = outerFunction();
console.log(inner()); // Output: I'm the inner function


//4. CALL A FUNCTION RETURNED BY ANOTHER FUNCTION
//You can pass functions as arguments to other functions. These are called callback functions.
function executeCallback(callback) {
    console.log("Executing the callback...");
    callback();
}

function myCallback() {
    console.log("This is the callback function.");
}

executeCallback(myCallback); 
// Output: 
// Executing the callback...
// This is the callback function.

