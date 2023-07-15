function factorial(number) {
  let result = 1;
  for (let index = number; index >= 1; index--) {
    result *= index;
  }
  return result;
}

console.log(factorial(4));

function recursiveFactorial(number) {
  return number === 0 ? 1 : recursiveFactorial(number - 1) * number;
}

console.log(recursiveFactorial(4));

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  }

  return sum(arr, n - 1) + arr[n - 1];
}

console.log(sum([1, 2, 3], 3));
