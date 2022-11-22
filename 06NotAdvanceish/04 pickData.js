// const user = ["Raj", 4, "admin"];
// var role = user[2];
// var name = user[0];

// console.log(role);

// var [name, courseCount, role] = user;

// console.log(role);


const myUser = {
    name: "raj",
    courseCount: 4,
    role: "admin",
};

console.log(myUser.role);

const { name, courseCount, role } = myUser;
console.log(role);