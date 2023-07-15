function customerPrototype(proto) {
  this.proto = proto;
  this.clone = function () {
    var customer = new Customer();

    customer.first = proto.first;
    customer.last = proto.last;
    customer.status = proto.status;

    return customer;
  };
}

function Customer(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;
}

var proto = new Customer("are", "ali", "pending");
var prototype = new customerPrototype(proto);
var customer = prototype.clone();

console.log(proto == customer);

console.log(customer);
