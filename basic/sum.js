//sum.js

function sum(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  //return =1=2+3+....+n
  return result;
}
console.log(sum(3));
console.log(sum(5));