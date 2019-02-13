// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// n size of row / column
// k counter
// M matrix
// i row index (start)
// j column index (start)
// x row index (current)
// y colument index (current)

// Break problem in smaller sub - problems
// |>|>|>|>|v|
// |^|>|>|v|v|
// |^|>|v|v|v|
// |^|^|<|<|v|
// |^|<|<|<|<|

// top row
function move_right(n, k, M, i, j){
  for(let y = j; y < j+n; y++){
    M[i][y] = k++;
  }
  if(n==0){ // base case when n is even
    M[i][j] = k;
    return;
  }
  return move_down(n, k, M, i, j+n);
}

// right column
function move_down(n, k, M, i, j){
  for(let x = i; x < i+n; x++){
    M[x][j] = k++;
  }
  if(n==-1){ // base case when n is odd
    return;
  }
  return move_left(n, k, M, i+n, j);
}

// bottom row
function move_left(n, k, M, i, j){
  for(let y = j; y > j-n; y-- ){
    M[i][y] = k++;
  }
  return move_up(n, k, M, i, j-n);
}

// left column
function move_up(n, k, M, i, j){
  for(let x = i; x > i-n; x--){
    M[x][j] = k++;
  }
  // n-2 , re
  return move_right(n-2, k, M, i-n+1, j+1);
}

function matrix(n) {
  var M = []
  for(let i=0; i<n;i++){
    let m = []
    M.push(m);
  }
  move_right(n-1, 1, M, 0, 0);
  return M;
}

module.exports = matrix;
