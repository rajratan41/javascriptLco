// TODO: Falsy value
// undefined
// null - empty value
// 0
// '' - empty string
// NaN - not a number

// anything other than these falsy value is Truthy value

//Falsy Value
// var user = null;

// if (user) {
//     console.log("Condition is True");   //result- empty
// }

// var user = '';

// if (user) {
//     console.log("Condition is True");   //result- empty
// }

// var user = "";

// if (user) {
//     console.log("Condition is True");   //result- empty
// }

// var user = 0;

// if (user) {
//     console.log("Condition is True");   //result- empty
// }


//Coercion 

// let user = "2";

// if (2 == user) {
//     console.log("Condition is True");
// }

// let user1 = "2";

// if(2 === user) {
//     console.log("Condition is True");   //result= nothing here 2 is not equal to number 2 its string "2" so, === is also check data type that is here string
// }


// 
console.log(2 + 2);     //result= 4
console.log("2" + 2);  // result= 22
console.log("2" + "2"); //result= 22