
function printNumber(n , dec = 1){
  if(n == 0){
    return;
  }
  // console.log(n);
  printNumber(n-dec);
  console.log(n);
}

printNumber(5);
