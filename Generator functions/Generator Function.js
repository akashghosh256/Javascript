

// function* ---- means generator functions


// what is iterator pattern ?

// The Iterator is a design pattern in which iterators (objects that allow us to 
//     traverse through all the elements of a collection) access the elements of 
//     an aggregate object sequentially without needing to expose its underlying form.





//     what is yield keyword in js?

//     The yield keyword pauses generator function execution and the value of the 
//     expression following the yield keyword is returned to the generator's caller.
//      It can be thought of as a generator-based version of the return keyword.



// Generator function
//It help to create your own custom iterator for yourself

// While custom iterators are a useful tool, their creation requires careful programming 
// due to the need to explicitly maintain their internal state. Generator functions provide 
// a powerful alternative: they allow you to define an iterative algorithm by writing a 
// single function whose execution is not continuous. Generator functions are written
//  using the function* syntax.



// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;
  
//     const rangeIterator = {
//       next() {
//         let result;
//         if (nextIndex < end) {
//           result = { value: nextIndex, done: false }; // done = false means more values are coming
//           nextIndex += step;
//           iterationCount++;
//           return result;
//         }
//         return { value: iterationCount, done: true }; // all values are done
//       },
//     };
//     return rangeIterator;
//   }

// normal iterator cant be used with for loop
//   const myIterator = makeRangeIterator(1,20);
//   let result = myIterator.next();
// while(!result.done){
//     console.log(result.value);
//     result = myIterator.next();
// }


// for loop

// function* count(){
//     yield 22;
//     yield 66;
// }

// const even = count();
// for( const v of even){
//     console.log(v);
// }

// Different part -----------------------------------------------------------------------------

function* makeNew(start, end){
    for( let i=start; i<=end; i++){
        yield i;
    }
}


//let one = makeNew(50,80);
// for(const val of one){
//     console.log(val);
// }



// index.html-------------------------

const btn = document.getElementById("nextbtn");
let one = makeNew(50,80);

btn.addEventListener("click", () => {
    btn.innerText = one.next().value;
   // one = one.next();
})










