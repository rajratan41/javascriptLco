/*
Define a function that can answer the role of a user:

A user can be on following roles:

# admin - with all access
# subadmin - with access to create/delete courses
# testprep - with access to create/delete test
# user - consume all content
# other - trial user

Input: getUserRole(name, role)
*/


function getUserRole (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;  //this is not necessary when we use return
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is a test prep with access to create and delete tests`;
            break;
        case "user":
            return `${name} is a user to consume content`;
            break;

        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Raj Ratan", "admin"));

var getRole = getUserRole("Aman", "user");
console.log(getRole);







//use in realworld

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            //break;  //this is not necessary when we use return
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            //break;
        case "testprep":
            return `${name} is a test prep with access to create and delete tests`;
            //break;
        case "user":
            return `${name} is a user to consume content`;
            //break;

        default:
            return `${name} is a trial user`;
            //break;
    }
}

console.log(getUserRole("Raj", "admin"));

var getRole = getUserRole("Kamal", "user");
console.log(getRole);