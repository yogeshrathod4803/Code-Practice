// before the code execution the memory allocatiion is done

// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or function before it is declared in the code. However, only the declarations are hoisted, not the initializations or assignments. Here's an example to illustrate hoisting:

// Example 1: Variable Hoisting

// javascript
// Copy code
console.log(x); // Output: undefined
var x = 5;
// In this example, the variable x is hoisted to the top of its scope, so the console.log(x) statement doesn't throw an error. However, the value is not assigned yet, so it prints undefined.

// Example 2: Function Hoisting

// javascript
// Copy code
foo(); // Output: "Hello, world!"

function foo() {
  console.log("Hello, world!");
}
// In this example, the function foo is hoisted to the top of its scope, so it can be called before its actual declaration.

// Example 3: Function Expression Hoisting

// javascript
// Copy code
bar(); // Output: TypeError: bar is not a function

var bar = function () {
  console.log("This is a function expression");
};
// In this example, the variable bar is hoisted, but it is initialized with a function expression, not a function declaration. So, when we try to call bar() before the assignment, it throws a TypeError.

// Example 4: Function Declaration vs Function Expression

// javascript
// Copy code
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
var multiply = function (a, b) {
  return a * b;
};

console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
// In this example, the function declaration add is hoisted and can be used anywhere in its scope, whereas the function expression assigned to multiply is not hoisted and can only be used after the assignment.

// Remember that hoisting can lead to unexpected behavior and confusion, so it is best to declare variables and functions before using them to improve code readability and avoid potential issues.
