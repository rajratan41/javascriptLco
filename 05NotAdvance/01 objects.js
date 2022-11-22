var user = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
}

user.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);
};

var raj = new user ("Raj", 4);
raj.getCourseCount();
// raj.getFirstName();

if (raj.hasOwnProperty("firstName")) {
    raj.getFirstName();
};

// console.log(raj);

var aman = new user ("aman", 2);
aman.getCourseCount();
aman.getFirstName()
// console.log(aman);