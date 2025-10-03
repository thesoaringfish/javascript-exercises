const fibonacci = function(n) {
  // Convert string to number if possible
  n = Number(n);

  // Reject invalid input (negative, NaN, decimals)
  if (n < 0 || !Number.isInteger(n)) return "OOPS";

  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
