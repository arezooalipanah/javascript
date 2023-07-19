// let age: number = 30;
// if(age < 50)
//     age += 10;

// console.log(age)

let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

let numbers: number[] = [1, 2, 3];

enum Size {
  Small = "s",
  Medium = "m",
}

let mySize: Size = Size.Medium;
console.log(mySize);

// function calc(income: number, taxYear?: number): number {
//     if (taxYear < 50_000) {
//         return income * 1.5;
//     }
//     return income;
// }

function calc(income: number, taxYear = 5): number {
  if (taxYear < 50_000) {
    return income * 1.5;
  }
  return income;
}

calc(1000);

let employee: {
  id: number;
  name?: string;
  retire: (date: Date) => void;
} = { id: 5, retire: (date: Date) => console.log(date) };

// type alias
type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 5,
  retire: (date: Date) => console.log(date),
};

// union type

function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  }

  return parseInt(weight) * 2.2;
}

// intersection type
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  resize: () => {},
  drag: () => {},
};

// literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// nullabe types
function greet(name: string | null | undefined) {
  // handle null or undefined machanizm
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("invalid argument");
  }
}
greet("Arezoo");
greet(null);
greet(undefined);

// optional chain
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number | null | undefined) {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear);

// optional element accsee
let numbers1: number[] = [];
console.log(numbers?.[0]);

// optional call operator
let log: any = null;
log?.("a");

// nullish operator
let speed: number | null = null;
let ride = {
  // speed: speed !== null ? speed : 30,
  speed: speed ?? 30,
};
console.log("target", ride.speed);

// type assertion
let phone = document.getElementById("phone") as HTMLInputElement;
// or
let phone1 = <HTMLInputElement>document.getElementById("phone");
phone.value;

// unknown type
function render(document: unknown) {
  if (typeof document === "string") {
  }
}

// never type
function processEvent(): never {
  while (true) {}
}

processEvent();
console.log("hi");
