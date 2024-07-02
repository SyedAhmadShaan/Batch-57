#! /usr/bin/env node
import inquirer from "inquirer";
import { StudentManager } from "./student-manager.js";
async function main() {
    console.log("Welcome to 'My Student Portal' - Student Management System");
    console.log("-".repeat(70));
    let studentManager = new StudentManager();
    while (true) {
        let choice = await inquirer.prompt({
            name: "choice",
            type: "list",
            message: "Select an option",
            choices: [
                "Add Student",
                "Enroll Course",
                "View Student Balance",
                "Pay Student Fee",
                "Show Student Status",
                "Exit",
            ],
        });
        switch (choice.choice) {
            case "Add Student":
                let nameInput = await inquirer.prompt({
                    name: "Name",
                    type: "input",
                    message: "Enter student name",
                });
                studentManager.add_student(nameInput.Name);
                break;
            case "Enroll Course":
                let course_input = await inquirer.prompt([
                    {
                        name: "studentId",
                        type: "input",
                        message: "Enter a student ID",
                    },
                    {
                        name: "courseInput",
                        type: "input",
                        message: "Enter a course name",
                    },
                ]);
                studentManager.enroll_course(parseInt(course_input.studentId), course_input.courseInput);
                break;
            case "View Student Balance":
                let balnceInput = await inquirer.prompt({
                    name: "studentBalance",
                    type: "input",
                    message: "Enter a Student ID to view the student balance.",
                });
                studentManager.view_student_balance(parseInt(balnceInput.studentBalance));
                break;
            case "Pay Student Fee":
                let payFeeInput = await inquirer.prompt([
                    {
                        name: "studentID",
                        type: "input",
                        message: "Enter a student ID",
                    },
                    {
                        name: "amountInput",
                        type: "input",
                        message: "Enter the amount to be paid",
                    },
                ]);
                studentManager.pay_student_fee(parseInt(payFeeInput.studentID), parseFloat(payFeeInput.amountInput));
                break;
            case "Show Student Status":
                let StudentStatusInput = await inquirer.prompt({
                    name: "student_ID",
                    type: "input",
                    message: "Enter a student ID.",
                });
                studentManager.show_student_status(parseInt(StudentStatusInput.student_ID));
                break;
            case "Exit":
                console.log("Thanks for using 'Student Management System'");
                process.exit();
        }
    }
}
main();
