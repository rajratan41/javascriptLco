// Building Signup form

const uid = "abc123";

  
// 'const' keyword is fixed keyword you cannot re-assingn values to 'const'

//here it will give you error bcz earlier you assigned value of uid in const,
// uid = "abcd2345";

var fullName = "Raj Ratan";
var email = "raj@gmail.com";
var password = "12345";
var confirmPassword = "12345";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullname = prompt("Enter your name");

console.log(uid);
console.log("Full Name is: "+ fullName);
console.log(email);

//Interpolation method
console.log(`
    With Unique ID: ${uid}
    user is: ${fullName}
    his email is: ${email}
    user password is: ${password}
`)


// Assignment on signup form

var firstName = "Raj";
var lastName = "Ratan";
var email = "raj@gmail.com";
var password = "12345";
var country = "India";
var loggedCount = 5;
var courseCount = 2;
var isLoggedInFromGoogle = true;
var isLoggedInFromFacebook = false;

console.log(`
    User First Name: ${firstName}
    User Last Name: ${lastName}
    User Email: ${email}
    User Country: ${country}
    User Logged In Count: ${loggedCount}
    User Course Count: ${courseCount}
    User Logged In From Google: ${isLoggedInFromGoogle}
    User Logged IN From Facebook: ${isLoggedInFromFacebook}
`)