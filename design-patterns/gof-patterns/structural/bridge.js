var Mouse = function (output) {
  this.output = output;

  this.click = function () {
    this.output.click();
  };

  this.move = function () {
    this.output.move();
  };

  this.down = function () {
    this.output.drag();
  };
};

var Screen = function () {
  this.click = function () {
    console.log("Screen select");
  };
  this.move = function () {
    console.log("Screen move");
  };
  this.drag = function () {
    console.log("Screen drag");
  };
  this.zoom = function () {
    console.log("Screen zoom in");
  };
};
