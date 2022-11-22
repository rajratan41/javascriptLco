// Allow user to access course if he:
// Logged in from Email
// Logged in from Google
// Logged in from Facebook

var email = true;
var google = false;
var facebook = true;

// using 2nd way - || or operator
if (email || google || facebook) {
    console.log("You are ready to access content");
} else {
    console.log("Login first to access content");
}




// assignment- using 1st way
if (email) {
    console.log("logged in successfully");
}
if (google) {
    console.log("logged in successfully using google");
}
if (facebook) {
    console.log("logged in successfully using facebook");
} else {
    console.log("Login First to Access Content")
}