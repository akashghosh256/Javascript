// A “higher-order function” is a function that accepts functions as parameters and/or returns a function

// Use for time taking tasks such as API calling 


function add(a, b, cb) {   // cb = call back function here = showResult
    let result = a + b;
    cb (result);
    return  () => console.log(result);
    }
    


    function showResult (result) {
    console.log(result);
    }



    
add (2, 4, showResult);

// or
 add(20,40 ,(val) => console.log(val));

 // or
 let resultFunction  = add(50,50, () => {});
resultFunction();

























