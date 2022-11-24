// import user from "./06classjs";

const user = require("./06classjs.js");

const raj = new user("Raj Ratan", "raj808341@gmail.com");

console.log(raj.getInfo());

raj.enrollCourse("React Bootcamp");
raj.enrollCourse("Angular Bootcamp");

console.log(raj.getCourseList());

let courses = raj.getCourseList();

courses.forEach ((c) => console.log(c));