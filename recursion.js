export default function recursion() {
  // recusion is function calling itself till it solves base case

  // below i have solved the math algos in recursion

  console.warn('In recursion algos');


  // solve fibonnaci in recursive - if(n<2){return n} else rerun function itself- example for rf(4) - rf(3)+rf(2) - [rf(2)+rf(1)]+[rf(1)+rf(0)] - [rf(1)+rf(0)]+1+0 - 1+0+1+0 - 2

  // rf(1)=1, rf(0)=0 every iteration has to come down to sum of these 2

  function recFib(n) {
    if (n < 2) {
      return n;
    }

    return recFib(n - 1) + recFib(n - 2);
    // recursive bigO is O(2^n)
  }
  // console.log('recursive fibonnaci is ' + recFib(7));



  // recursive factorial
  function recFac(n){
    if(n<1){
      return 1
    }

    return n*recFac(n-1)
    // bigO - o(n)
  }
  // console.log(recFac(5))




}
