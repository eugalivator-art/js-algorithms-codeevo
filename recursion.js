export default function recursion() {
  // recusion is function calling itself till it solves base case

  // solve the math algos in recursion

  console.warn('In Recursion');

  // solve fibonnaci in recursive - if(n<2){return n} else rerun function itself- example for rf(4) - rf(3)+rf(2) - [rf(2)+rf(1)]+[rf(1)+rf(0)] - [rf(1)+rf(0)]+1+0 - 1+0+1+0 - 2

  // rf(1)=1, rf(0)=0 every iteration has to come down to sum of these 2

  function recFib(n) {
    if (n < 2) {
      return n;
    }

    return recFib(n - 1) + recFib(n - 2);
  }

  console.log('recursive fibonnaci is ' + recFib(7));
}
