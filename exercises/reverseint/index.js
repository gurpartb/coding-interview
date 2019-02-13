// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n){
  // ternary operator
  // var parity = (n >= 0) ? 1 : -1; 
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * ((n >= 0) ? 1 : -1);
};

module.exports = reverseInt;
