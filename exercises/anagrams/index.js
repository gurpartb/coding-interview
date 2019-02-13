// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str){
  return str.replace(/[^\w]/g, "").toLowerCase();
}

function sortString(str){
  return str.split('').sort().join('');
}

function anagrams(stringA, stringB) {
  var a = cleanString(stringA);
  var b = cleanString(stringB);
  a = sortString(a);
  b = sortString(b);
  return a === b;
}

module.exports = anagrams;

// function buildCharMap(str){
//   const charMap = {};
//   for(e of str.replace(/[^\w]/g, "").toLowerCase()){
//     charMap[e] = charMap[e] + 1 || 1;
//   }
//   return charMap;
// }
//
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false;
//   }
//   for(e in aCharMap){
//     if(aCharMap[e] !== bCharMap[e]){
//       return false;
//     }
//   }
//   return true;
// }
