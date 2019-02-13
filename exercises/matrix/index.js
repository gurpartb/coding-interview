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

function move_right(n, k, M, i, j){
  for(y = j; y < j+n; y++){
    M[i][y] = k++;
  }
  if(n==0){
    M[i][j] = k;
  }
  if(n<=0){
    return;
  }
  return move_down(n, k, M, i, j+n);
}

function move_down(n, k, M, i, j){
  for(x = i; x < i+n; x++){
    M[x][j] = k++;
  }
  if(n<=0){
    return;
  }
  return move_left(n, k, M, i+n, j);
}

function move_left(n, k, M, i, j){
  for(y = j; y > j-n; y-- ){
    M[i][y] = k++;
  }
  return move_up(n, k, M, i, j-n);
}

function move_up(n, k, M, i, j){
  for(x = i; x > i-n; x--){
    M[x][j] = k++;
  }
  return move_right(n-2, k, M, i-n+1, j+1);
}

function matrix(n) {
  var M = []
  for(i=0; i<n;i++){
    let m = []
    for(j=0; j<n; j++){
      m.push(0);
    }
    M.push(m);
  }
  move_right(n-1, 1, M, 0, 0);
  return M;
}

module.exports = matrix;
