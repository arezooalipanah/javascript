class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  protected walk(): void {
    console.log("walking");
  }
}

// inheritance
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    this.walk();
    console.log("taking a test");
  }
}

let student = new Student(1, "arezoo", "alipanag");
student.takeTest();

class Teacher extends Person {
  override get fullName(): string {
    return "Profferssor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName(): string {
    return "Principal " + super.fullName;
  }
}

let teacher = new Teacher("arezoo", "alipanah");
console.log(teacher.fullName);

// polymorphism
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, "a", "b"),
  new Teacher("c", "d"),
  new Principal("f", "g"),
]);

// abstract
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("radius");
  }
}

let r = new Circle(5, "red");
console.log(r.render());

// interface
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    console.log("adding..");
  }
  removeEvent(): void {
    console.log("removeing...");
  }
}
