// Import stylesheets
import './style.css';
import recursion from './recursion';
import search from './search';
import sort from './sort';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 4 MATH ALGORITHMS below

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
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
    // multiply previous number so fact*i
  }
  // runs n times so big-o =0(n)
  return fact;
}
// console.log(factorial(5))



// test if number is prime or not
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  //

  for (let i = 2; i < n; i++) {
    // for optimal code i<=Math.sqrt(n)
    // this will make the loop run less times as the sqrt of any number is less than the number itself which gives O(sqrt(n)) time complexity
    if (n % i === 0) {
      return false;
      // example - starts dividing from number 2 onward ie 4/2 === 0 (ends here returns false), 4/3 , 4/4 (stops at i<n)
    }
  }

  return true;
}
// console.log(isPrime(3))



// power of 2 [logic is iterate over number and divide by 2 till it becomes 1]
function isPowerOf2(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    // used while loop because iteration number not known and initialization not required
    if (n % 2 !== 0) {
      // when the remainder is not equal to 0 it is false, if 0 then divide the number by 2 (increament condition at end)
      return false;
    }
    n = n / 2;
  }
  // if it passes while loop then it is power of 2, example for 6 - 6%2=0, 6/2 =3, 3%2=1, returns false

  return true;
  // big O = O(log n) since n is reduced by half
}
// console.log(isPowerOf2(16))



// power of 2 optimized
function isPowerof2BitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
  // in binary power of 2 ends with 0 (3-100, 4-1000)
}

// only math recursion ie fibonnaci and factorial
recursion();

// linear search, binary search, recursive binary
search();

// bubble sort, Insertion sort, Quick sort, Merge sort
sort();