class CollageManagement {

    constructor(collagename, instituteid, contactNo) {
        this.collagename = collagename;
        this.finstituteid = instituteid;
        this.contactNo = contactNo;
    }

}
class Department {
    constructor(departmentid, departmentname) {
        this.departmentid = departmentid;
        this.departmentname = departmentname;

    }

}
class Course {
    constructor(Courseid, Coursename) {
        this.Courseid = Courseid;
        this.Coursename = Coursename;
    }
}
class Faculties {
    #salary = Rs50000
    constructor(id, firstname, lastname, departmentid, salary) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.departmentid = departmentid;
        this.#salary = salary;
    }



    getdetails() {
        return (`${this.departmentid} ${this.name} ${this.departmentname}${this.salary}`)

    }

}
class Student {
    constructor(id, fullname, gender, contactNo) {
        this.id = id;
        this.fullname = fullname;
        this.gender = gender;
        this.contactNo = contactNo;
    }
    getstudentdetails() {
        return (`Students Deatails Id is ${this.id} Fullname ${this.name} Gender is ${this.gender} contact details ${this.contactNo}`)
    }
}
let student1 = new Student('1001A', 'Mujahid Pathan', 'Male', 9673989215);
let student2 = new Student('1002A', 'Farhan Khed', 'Male', 1234567890);
let student3 = new Student('1003A', 'Faisal Shakih', 'Male', 0987654321);
let Faculties1 = new Faculties('1100A', 'faisal', 'shaikh', 'IT', 'Rs50000')
console.log(student1.gender);

