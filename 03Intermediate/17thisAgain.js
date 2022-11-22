console.log(this);

var user = {
    firstName: "Raj",
    courseCount: 4,
    getCourseCount: function () {
        console.log("LINE 7", this);
        function sayHEllo() {
            console.log("Hello");
            console.log("LINE 10", this);
            
        }
        sayHEllo();
    },
};

user.getCourseCount();