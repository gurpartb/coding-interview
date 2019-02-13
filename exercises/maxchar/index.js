// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function dictUpdate(dict, e){
//   if(e in dict){
//     dict[e] +=1;
//   }else{
//     dict[e] = 1;
//   }
//   return dict;
// }

function charCount(str){
  var dict = {};
  for (e of str) {
    dict[e] = dict[e] + 1 || 1;
  }
  return dict;
}

function maxChar(str) {
  var dict = charCount(str);
  var char ='';
  var max = 0;
  for(e in dict){
    if(max < dict[e]){
      char = e;
      max = dict[e];
    }
  }
  return char;
}

module.exports = maxChar;
