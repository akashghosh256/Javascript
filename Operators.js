// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators








// exponentiation -------------------------------------------------------

let result = 2 ** 3;  // 2 raised to the power of 3
console.log(result); // Output: 8





// In JavaScript, == and === are comparison operators, but they behave differently.

// == (Equality Operator):

// Performs type coercion, which means it converts the operands to the same type
// before making the comparison.

// Allows for loose equality checking.


// === (Strict Equality Operator):

// Does not perform type coercion.

// Requires both the value and the type to be the same for the comparison to be true.


let a = 5;
let b = '5';

console.log(a == b);  // true, because of type coercion
console.log(a === b); // false, because types are different




let text1 = "A";
let text2 = "B";
let result2 = text1 < text2;

console.log("text1 < text2:", result2);


let text3 = "John";
let text4 = "Doe";
let text5 = text3 + " " + text4;
console.log(text5);




// In JavaScript, the instanceof operator is used to check whether an object is an instance 
// of a particular class or constructor. Here's an example:
// javascript
// Define a constructor function
function Animal(name) {
    this.name = name;
}

// Create an instance of the Animal class
let cat = new Animal('Fluffy');

// Check if the object is an instance of the Animal class
if (cat instanceof Animal) {
    console.log('cat is an instance of Animal');
} else {
    console.log('cat is NOT an instance of Animal');
}



























