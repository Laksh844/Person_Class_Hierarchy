// Base class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getDetails() {
    return `${super.getDetails()}, Course: ${this.course}`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

// Demo
const student1 = new Student("Lakshay", 21, "Computer Science");
const teacher1 = new Teacher("Mr. Sharma", 45, "Mathematics");

console.log("Student Info:", student1.getDetails());
console.log("Teacher Info:", teacher1.getDetails());
