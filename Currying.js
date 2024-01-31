// function add(a) {
//     return function (b) {
//     return function (c) {
//     return a + b + c;
//     };
//     };
//     }
   
//     // all  the threee parameters should be present for execution
//  console.log(add (2)(3) (5));



//or
const add = (a) => (b) => (c) => a+ b + c;
console.log (add (1) (2) (3));




//  function sendAutoEmail(to) {
//     return function (subject) {
//     return function (body) {
//     console.log (`Sending Email to ${to} with subject ${subject} with ${body}`);
//     };
//     };
//     }

// let step1 = sendAutoEmail("aaa@gmail.com");
// let step2 = step1("New order confirrmation");
// step2("hey hey.... delivered");


// or
const sendAutoEmail = (to) => (subject) => (body) =>
`Sending Email to ${to} with subject ${subject}: ${body}`;
let step1 = sendAutoEmail("piyushgarg.dev@gmail.com");
let step2 = step1("New Order Confirmation");
console.log(step2 ("Hey Piyush, Here is something for you"));






