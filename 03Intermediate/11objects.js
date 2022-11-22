var user = {
    firstName: "Raj",
    lastName: "Ratan",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
};

console.log(user);
console.table(user);

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);


// Assignment

var mobile = {
    name: "iphone",
    model: "iphone 14",
    year: "2022",
    price: "79999",
    offerPrice: "69999",
};

console.table(mobile);