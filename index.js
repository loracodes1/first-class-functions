// 1. Function expression assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Lora")); // Output: Hello, Lora!

//STORE FUNCTIONS IN DATA STRUCTURES
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

