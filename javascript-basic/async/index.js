let number = 12;

number = 20;

console.log(number);

function message() {
  console.log("message1");
}

function message2() {
  console.log("message2");
}

setTimeout(message, 3000);

console.log("inner times");

setTimeout(message2, 1000);

console.log("after times");
