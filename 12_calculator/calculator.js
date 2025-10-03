const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total * num, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
	if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
