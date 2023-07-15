function EmployeeFactory() {
  this.create = function (name) {
    return new Employee(name);
  };
}

function Employee(name) {
  this.name = name;
  this.say = function () {
    console.log(name);
  };
}

function VendorFactory() {
  this.create = function (name) {
    return new Vendor(name);
  };
}

function Vendor(name) {
  this.name = name;
  this.say = function () {
    console.log(name);
  };
}

var employeeFactory = new EmployeeFactory();
var vendorFactory = new VendorFactory();

employeeFactory.create("Joan DiSilva").say();
