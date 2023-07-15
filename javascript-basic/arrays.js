const numbers = [1, 2, 3, 4];
numbers.push(8, 6, 1);
numbers.unshift(14, 10, 11);
numbers.splice(2, 0, "a", "b");
console.log(numbers);
console.log(numbers.indexOf(14));
console.log(numbers.indexOf(0));

console.log(numbers.lastIndexOf(1));
console.log(numbers.includes("a"));

const first = [1, 2, 3];
const last = [4, 5, 6];

const combined = [...first, ...last];
const slice = [...combined];
slice[1] = 30;

console.log(combined);
console.log(slice);

const langs = [{ name: "html" }, { name: "css" }];

langs.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (b.name > a.name) return 1;
  return 0;
});

console.log(langs);

const nums = [1, 2, 5];
const mapped = nums.map((v) => v * 2);
console.log(nums);
console.log(mapped);

const products = ["html", "css", "js"];
const items = products.map((p) => `<li>${p}</li>`);
console.log(`<ul>${items.join("")}</ul>`);
