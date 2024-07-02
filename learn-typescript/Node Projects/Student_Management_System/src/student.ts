export class Student {
  static counter = 50000;
  id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.id = Student.counter++;
    this.name = name;
    this.courses = [];
    this.balance = 200;
  }

  enroll_course(course: string) {
    this.courses.push(course);
  }

  view_balance() {
    console.log(`Balance for ${this.id} is $${this.balance}`);
  }

  pay_fee(amount: number) {
    this.balance -= amount;
  }

  student_status() {
    console.log(`Student ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Courses: ${this.courses}`);
    console.log(`Balance: $${this.balance}`);
  }
}
