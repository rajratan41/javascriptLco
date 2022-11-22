// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete course
// testprep - get access to create/delete test
// user - get access to consume content

var user = "abc";

//switch case operator
//Syntax-
//  switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

switch (user) {
    case "admin":
        console.log("You get Full Access");
        break;
    case "subadmin":
        console.log("You gets access to create/delete course");
        break;
    case "testprep":
        console.log("You gets access to create/delete test");
        break;
    case "user":
        console.log("You get access to consume content");
        break;
    
    default:
    console.log("Trial User");
    break;
}