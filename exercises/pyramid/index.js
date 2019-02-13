// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  var spaces = ''.padEnd(n-1,' ');
  var stairs = '#';
  console.log(spaces+stairs+spaces);
  for(i = 1; i<n; i++){
    spaces = spaces.slice(1);
    stairs += '##';
    console.log(spaces+stairs+spaces);
  }
}

module.exports = pyramid;

// function pyramidRec(stairs, spaces){
//   console.log(spaces+stairs+spaces);
//   if(spaces.length == 0){
//     return;
//   }
//   pyramidRec(stairs+'##',spaces.slice(1));
// }
//
// function pyramid(n) {
//   pyramidRec('#',''.padEnd(n-1,' '));
// }
