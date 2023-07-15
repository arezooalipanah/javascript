class products {
  constructor() {
    this.title = "book";
  }

  delayInfo() {
    console.log(this);
    setTimeout(
      function () {
        console.log(this);
        console.log(this.title);
      }.bind({ name: "arezoo" }),
      3000
    );
  }
}

const p = new products();
p.delayInfo();
