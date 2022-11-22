// There are Three Keywords to Declare values-  let, var, const
// Use of 'Var' keyword

var fullName = "Raj Ratan";

//"Strings are in double quote" eg- "React JS Bootcamp", "Raj Ratan".
// Anything that is written in double quote "" is called as STRING.

var courseName = "React JS Bootcamp";

//Bolleans are two 1. true,  2. false

var isLoggedIn = true;

//Number is always written as 34, 12, 43, 4, 3 etc without any quote.

var loggedCount = 34;

console.log(loggedCount); // result- 34
console.log("loggedCount"); // result- loggedCount


var paymentMode;
console.log(paymentMode); // result- undefined

// here we are not using 'var' keyword beacuse we earlier declare var and reserve space for paymentMode 
paymentMode = "Credit Card";

console.log(paymentMode); // result- Credit Card