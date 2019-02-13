// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// function fizzBuzz(n) {
//   for(i = 1; i <= n; i++){
//     var s = !(i % 3) ? 'fizz':'';
//     s += !(i % 5) ? 'buzz':'';
//     s = !s.length ? i:s;
//     console.log(s);
//   }
// }
//
// module.exports = fizzBuzz;

function fizzBuzz(n) {
  for(i = 1; i <= n; i++){
    var s = '';
    if(!(i%3) && !(i%5)){
      s = 'fizzbuzz';
    }else if(!(i%3)){
      s = 'fizz'
    } else if(!(i%5)){
      s = 'buzz';
    } else {
      s = i
    }
    console.log(s);
  }
}
module.exports = fizzBuzz;
