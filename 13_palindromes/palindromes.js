const palindromes = function (str) {
  // Normalize string: lowercase and remove non-alphanumeric chars
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Reverse the string
  let reversed = cleanStr.split("").reverse().join("");
  
  // Compare original and reversed
  return cleanStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
