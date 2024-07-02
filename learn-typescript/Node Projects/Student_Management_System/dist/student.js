export class Student {
    static counter = 50000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 200;
    }
    enroll_course(course) {
        this.courses.push(course);
    }
    view_balance() {
        console.log(`Balance for ${this.id} is $${this.balance}`);
    }
    pay_fee(amount) {
        this.balance -= amount;
    }
    student_status() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: $${this.balance}`);
    }
}
