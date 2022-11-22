// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// if any one is missing stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// 1st way 

// if (isLoggedIn) {
//     console.log("Logged IN Successfully");
//     if(isEmailVerified) {
//         console.log("Email is Verified");
//         if(cardInfo) {
//             console.log("You can make a Purchase");
//         }
//     }
// }

// 2nd way- using && and operator

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow User to make a purchase");
} else {
    console.log("You are not allow to purchase");
}