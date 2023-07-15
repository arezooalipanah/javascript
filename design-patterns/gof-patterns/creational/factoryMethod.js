var Factory = function () {
  this.createEmployee = function (type) {
    var employee;
    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }

    employee.type = type;
    employee.say = function () {
      console.log(this.type + this.salary);
    };

    return employee;
  };
};

var FullTime = function () {
  this.salary = "$12";
};

var PartTime = function () {
  this.hourly = "$11";
};

var Temporary = function () {
  this.hourly = "$10";
};

var Contractor = function () {
  this.hourly = "$15";
};

var factory = new Factory();
factory.createEmployee("fulltime").say();
