

// old school function ko promises mea convert kr dea - promisification

function promisify(fn){
    return function(...args){
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) =>{
                if(error) return reject(error);
                return resolve(result);
            })                         //eject 
        })
    }
}





// calback hellllllllllllllllllllllllllllllll




// old school promsie function
// Function to load an external script using a callback-based approach

function loadScript(src, callback) {
    // Create a new script element
    const script = document.createElement('script');
    
    // Set the source attribute of the script to the provided URL
    script.src = src;
  
    // Set up event listeners to handle script loading success or failure
    script.onload = () => callback(null, script); // Invoke callback with no error if script successfully loads
    script.onerror = (err) => callback(err);      // Invoke callback with an error if script loading fails
  
    // Append the script element to the head of the document to initiate the loading
    document.head.appendChild(script);
  }
  
 // Example usage of the loadScript function
//   loadScript('test.js', (err, script) => {
//     // Callback function to handle the result of script loading
  
//     // Check if there's an error during script loading
//     if (err) {
//       console.log('Error:', err);
//     } else {
//       // If no error, log a success message
//       console.log('Script loaded successfully');
//     }
//   });


  const loadScriptNew = promisify(loadScript);


// loadScriptNew("test.js").then(() => console.log("Done:"))
// .catch((err) => console.log("Error Ho gya"));


// or for promise

(async () => {
    try{
    const result = await  loadScriptNew("tesst.js");
    console.log("Done");
    }
    catch(err){
        console.log("Erroor 2");
    }
})();





// console.log(loadScriptNew);
//  
  








































































