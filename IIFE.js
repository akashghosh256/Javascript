
// IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function 
// that runs as soon as it is defined


// (function add(a, b) {
//     console.log (a + b);
//     }) (2, 3);


//     (function say() {
//     console.log("Hey");
//     })();

    
//     (() => console.log("I am Es6"));

//     (() => {
//         let age =20;
//         console.log(age);
//     })();


//     const value = (() => 100) ();
//     console.log (value);



// make api calling simple

// const data = (async () => await fetch()) ()



// atm-----------------------------
const atm = function( intialBalance ){
    let balance = intialBalance;
    function withdraw(amt){
        if(amt > balance){
            console.log(" kidding?");
   

        }
        else{
            balance -= amt;
            return balance;
        }
    }
    return {withdraw};

};
const piyush = atm(1000);
console.log(piyush.withdraw(800));
console.log(piyush.withdraw(1000000));




















