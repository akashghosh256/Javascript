
let sum=0;
for(let i=0; i<=10;i++)
sum += i;
console.log("sum",sum);

// Loop scope---------------------------------

var i = 5;
for (var i = 0; i < 10; i++) {
  // some code
}
console.log("i:", i);


// for(;;){
//     console.log("infinite");
// }


const cars= ["Ferrari", "GTR"];
let k = 0;
let len = cars.length;
let text = "";
for (; k < len; k++) {
  text += cars[k] + "<br>";
}

console.log(text);







