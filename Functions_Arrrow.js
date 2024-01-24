// functions in JS
// // Functions like these, which can accept any number 
// // of arguments, are commonly referred to as "variadic 
// // functions" or "functions with a variable number of 
// // parameters."

// function addNumbers(){
//     console.log(arguments);
//     let sum =0;
//     for(let i=0; i<arguments.length;i++)
//     sum += arguments[i];
// return sum;
// }

// let res = addNumbers(4,5,6,7,88,8,12);
// console.log("Add1 ",res);


// //using Spread operator ...numbers for infinite datas
// function addNumbers(...numbers){
//     console.log(numbers);
//     let sum =0;
//     for(let i=0; i<numbers.length;i++)
//     sum += numbers[i];
// return sum;
// }

// let res2 = addNumbers(4,5,6,7,88,8,12);
// console.log("Add2 ",res2);


// Arrow Functions--------------------------------------------------------------

// 1. Syntax I
// const sayHello = () => {
//     // Arrow Functions
//     console.log("Heyy");
//     };

// // return important------------------------------------------------
//     const add = (a, b) => {
//     return a + b; 
//     };

//     const addV2 = (a, b) => a + b; // One Liner, it automatically returns the results

//     console.log(add(10,30));
//     console.log (addV2 (2, 3));

//     // 2. 'arguments' keyword not use for arrow function 
//     // Use spread operator for unlimited arguments in arrorw functions

//     const addNum = (...numbers) =>{
//         console.log(numbers);
//     }
// addNum(2,4,5,6,7,7,3,43,2);


// 3. Hoisting 
// Features of Hoisting:
// In JavaScript, Hoisting is the default behavior of moving all the declarations at 
// the top of the scope before code execution. Basically, it gives us an advantage that no 
// matter where functions and variables are declared, they are moved to the top of their
// scope regardless of whether their scope is global or local. 
// It allows us to call functions before even writing them in our code. 

hey();  //works for normal function not arrow function

function hey(){
    console.log("heyyy");
}


const hey2 = () =>{
    console.log("hey222222222");
}

hey2();

// 4. This Keyword

const obj = {
    value: 20,
    // works for normal function
 myFunction: function () {   // pointing to current object localy, not whole chrome window
    console.log(this);
    console.log("value is local :", this.value); // this here refers to current object
    },
    // or
    // myFunction() {
    //     console.log(this.value);
    // },
    };

    const obj2 = {
        value: 20,
     myFunction: () =>{
        console.log(this);
        console.log("value is global:", this.value); // this here refers to window of chrome means globally
        },

        };
    
obj.myFunction();  // func
obj2.myFunction();  //arrow func


























































