function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

function Car() {
  this.doors = 0;
  this.addParts = function () {
    this.doors = 4;
  };
}

function carBuilder() {
  this.car = null;

  this.step1 = function () {
    this.car = new Car();
  };

  this.part2 = function () {
    this.car.addParts();
  };

  this.get = function () {
    return this.car;
  };
}
