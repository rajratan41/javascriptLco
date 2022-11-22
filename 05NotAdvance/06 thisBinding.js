const raj = {
    firstName: "Raj",
    lastName: "Ratan",
    role: "Admin",
    courseCount: 2,
    getInfo: function () {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    },
};

// raj.getInfo();


const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
};

// bind
var djInfo = raj.getInfo.bind(dj);
djInfo();

// call

raj.getInfo.call(dj);