// literal object
let circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
console.log(circle.constructor);

// factory function
function createFunction(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

let circle1 = createFunction(1);
console.log(circle1);
console.log(circle1.constructor);

// construnctor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("'draw");
  };
}

let circle2 = new Circle(2);
console.log(circle2);
console.log(circle2.constructor);

const c = { radius: 2 };
delete c.radius;
console.log(c);
console.log(c.constructor);

let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

let ref = { value: 10 };
let ref1 = ref;
ref.value = 30;

console.log(ref1);

let circleKeys = Object.keys(circle);
console.log(circleKeys);

let circleEntries = Object.entries(circle);
console.log(circleEntries);

if ("radius" in circle) {
  console.log("yes");
}

// clone object
const another = {};
for (let key in circle) {
  another[key] = circle[key];
}

console.log(another);

const another1 = Object.assign({}, circle);
console.log(another1);


const another2 = {...circle}
console.log(another2)