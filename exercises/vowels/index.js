// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str){
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function cleanString(str){
//   return str.replace(/[^\w]/g, "").toLowerCase();
// }
//
// function vowels(str) {
//   var vowelsArray = ['a','e','i','o','u'];
//   var strClean = cleanString(str);
//   var count = 0;
//   for(e of strClean){
//     count += vowelsArray.includes(e) ? 1:0;
//   }
//   return count;
// }
