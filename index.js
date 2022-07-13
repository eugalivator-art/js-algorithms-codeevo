// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// fibonacci algorithm
const fibonnaci = (n) => {
  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]; 
    // after 2 the next values in array are sume of the previous 2 elements
    // big-o = 0(n)
  }

  return arr;
};
// console.log(fibonnaci(6));


// factorial of a number
function factorial(n) {
  let fact = 1
  for(let i=1; i<=n; i++){
    fact = fact*i
    // multiply previous number so fact*i
  }
  // runs n times so big-o =0(n)
  return fact
}
// console.log(factorial(5))


// test if number is prime or not
function isPrime(n){
  if(n<2){
    return false
  }
  // 

  for (let i=2; i<n; i++){
    if(n%i === 0){
      return false
      // example - starts dividing from number 2 onward ie 4/2 === 0 (ends here returns false), 4/3 , 4/4 (stops at i<n)
    }
  }

  return true
}
// console.log(isPrime(3))






