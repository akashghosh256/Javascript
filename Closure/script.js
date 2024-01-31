
// function inside other function

// read - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


// function main(name) {
//     function sayMyName() {
//     console.log (name);
//     }
//     sayMyName();
//     }
//  main("Piyush yooooo");
 




// function main(name) {
//     function sayMyName() {
//     console.log (name);
//     }
//     return sayMyName;
//     }
//     let consolePiyush = main("Piyush");
//     console.log(consolePiyush);




// creating type of utility function

// function adder(num) { // num= 5
//     function add(b) {  // b = 2 or 10
//     console.log(num + b);
//     }
//     return add;
//     }
//     const addTo5 = adder(5);
 
//     addTo5 (2);
//     addTo5 (10);



// for html----------------------------------------------------------------------------------------------

const myName = document.getElementById("myName");


const btn = document.getElementById("myButton");

function makeTextSizer (size) {
function changeSize() {
myName.style.fontSize = `${size}px`;
}

return changeSize;
}
const size12 = makeTextSizer (12);
const size20 = makeTextSizer (20);
const size52 = makeTextSizer(52);
const size5 = makeTextSizer (5);


btn.addEventListener("click", size20);











