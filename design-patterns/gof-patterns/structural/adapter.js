function Shipping() {
  this.request = function (zipstart, zipend, weight) {
    return "$49";
  };
}

function AdvanceShipping() {
  this.login = function (credentials) {};
  this.setStart = function (start) {};
  this.setDestination = function (destination) {};
  this.calculate = function (weight) {
    return "$39";
  };
}

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}
