var title = "book";

function info() {
  function printTitle() {
    console.log(title);
  }
  var price = 99;
  console.log(price);
  printTitle();
}

info();
// printTitle();

if (true) {
  var price = 100;
  console.log(price);
}

console.log(price);

if (true) {
  let price2 = 100;
  console.log(price2);
}

console.log(price2);
