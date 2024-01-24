
const cars = ["Saab", "Volvo", "BMW"];


// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// Heterogenous array
const person = ["John", "Doe", 46, 899];
person.pop();


person.push({name : "Raja"}); // pushing object

console.log(person.indexOf(46));
person.reverse();

for(let i=0; i<person.length;i++)
console.log(person[i]);


// video 11-------------------------------------------------------------------------------
//  Array high order functions

// forEach - returns a call back function
const array1 = ['a', 'b', 'c'];

// array1.forEach((val) => console.log(val));

// // or---
// function print(value){
//     console.log(value);
// }
// array1.forEach(print);


// map
//array1.map((val) => console.log(val));


// difference between map and forEach
//  forEach is used when you want to iterate through elements without creating a 
// new array, and map is used when you want to transform each element into a new array 
//  on the result of a provided function.

const numbers = [1, 2, 3, 4, 5, 6, 7];

function doubleValue(n) { 
return n* 2;
}

let newArr = numbers.map (doubleValue);
console.log (newArr);


// find
let ans = numbers.findIndex((num) => num === 7);
console.log(ans);

// filter

newArr = numbers.filter((num) => num %2 == 0);
console.log("Printing event numbers array: ",newArr);


// slice
newArr = numbers.slice(1,4+1);
console.log("slice: ",newArr);

// splice - also effects main array
newArr = numbers.splice(1,4+1);
console.log("splice:", newArr);
console.log(numbers);






















