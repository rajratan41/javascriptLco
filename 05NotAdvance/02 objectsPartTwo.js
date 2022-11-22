var user = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);
    },
};

var raj = Object.create(user);
console.log(raj);
raj.name = "Raj Ratan";
raj.getUserName();

var aman = Object.create(user, {
    name: {value: "Aman"},
    courseCount: {value: 2},
});

aman.getUserName();
