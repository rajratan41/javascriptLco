// Show user a signout button if he is authenticated or logged in,
// otherwise show him option to Login/Signup

var authenticated = false;

// 1st way
if (authenticated) {
    console.log("Show Signout Button");
} else {
    console.log("Show Login Button");
}

// 2nd way - ternary operator.
// Syntax- (conditon ? ifTrue: ifFalse)

authenticated ? console.log("Signout Button") : console.log("Login Button");