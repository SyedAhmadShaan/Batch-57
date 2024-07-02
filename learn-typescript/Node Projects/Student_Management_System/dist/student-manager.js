import { Student } from "./student.js";
export class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    add_student(name) {
        let student = new Student(name);
        if (student) {
            this.students.push(student);
            console.log(`Student: ${name} added successfully for ${student.id}`);
        }
    }
    enroll_course(student_id, course) {
        let student = this.find_student(student_id);
        if (student) {
            student.enroll_course(course);
            console.log(`${student.name} enrolled in ${course} successfully`);
        }
        else {
            console.log("Student not found. Please enter a correct student ID");
        }
    }
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("Student not found. Please enter a correct student ID");
        }
    }
    pay_student_fee(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.pay_fee(amount);
            console.log(`$${amount} paid for student ID: ${student_id}`);
        }
        else {
            console.log("Student not found. Please enter a correct student ID");
        }
    }
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.student_status();
        }
        else {
            console.log("Student not found. Please enter a correct student ID");
        }
    }
    find_student(student_id) {
        return this.students.find((std) => std.id === student_id);
    }
}
