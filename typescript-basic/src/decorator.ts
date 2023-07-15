// crete decorator
function Component(constructor: Function) {
  console.log("component decorator called");
  constructor.prototype.unigueId = Date.now();
  constructor.prototype.insertInDom = () => {
    console.log("inserting...");
  };
}

@Component
class ProfileComponent {}

// send parameter to decorator
type ComponentOptions = {
  select: string;
};

function Component2(options: ComponentOptions) {
  return (constructor: Function) => {
    constructor.prototype.options = options;
  };
}

@Component2({ select: "#profile-img" })
class ProfileComponent2 {}

// use multi decorators

function Pipe(constructor: Function) {
  console.log("pipe");
  constructor.prototype.pipe = true;
}

@Pipe
@Component2({ select: ".class" })
class ProfileComponent3 {}

// method decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("before");
    original.call(this, ...args);
    console.log("after");
  };
}

class Person3 {
  @Log
  say(message: string) {
    console.log(message + " person");
  }
}

let person = new Person3();
person.say("hello");

// accessor decarator

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toLocaleUpperCase() : result;
  };
}

class Person4 {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person4 = new Person4("arezoo", "alipanah");
console.log(person4.fullName);

// property decorator
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(`${propertyName} should be at least ${length}`);
        }

        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}
class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User("1258");
console.log(user.password);

// parameter decorator
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};
const watchedParameters: WatchedParameter[] = [];
function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}  

console.log(watchedParameters);
