class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
        this.#courseList.push(name);
    }
    getCourseList () {
        return this.#courseList;
    }

    login() {
        return "You are logged in";
    }
}

class subAdmin extends user {
    constructor (name, email) {
        super(name, email);
    }
    getAdminInfo() {
        return "I am Sub-Admin"
    }
    login() {
        return "login for admin only"
    } 
}

module.exports = user;


// const rock = new user("rock", "roack@rock.com");
// console.log(rock.getInfo());
// rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.CourseList);


const tom = new subAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());