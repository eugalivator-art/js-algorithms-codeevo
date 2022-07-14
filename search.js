export default function search() {
  console.warn('In search algos');

  // given value find the index of array - linear search
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      // the index to be returned is i, condition is arrr.length
      if (arr[i] == target) {
        return i;
      }
    }
    return -1;
    // big-o = linear O(n)
  }
  // console.log(linearSearch([1, 2, 33, 4, 5, 66, 7], 7));




  // binary search - same problem statement, but on assorted array
  // so binary search uses divide and conquer rather than iterarting through every element in array, it searches one half of array and dicards the rest thus improving the time complexity
  // the approach is as follows - we have 2 pointers initially, rightIndex(0) and leftIndex(arr.length-1). Then we loop the array and get the middleIndex ((right+left)/2). Then we compare middleIndex with the target. if it mathches then we send the middleIndex, else if it is less than the target we change the right pointer to middleIndex-1 (making the boundries as 0 to middleIndex-1), else if greater than the target we change the left pointer to midddleIndex+1 (making the boundries as middleIndex+1 to arr.length-1)
  function binarySearch(arr, target) {
    let rightIndex = arr.length - 1
    let leftIndex = 0

    while(leftIndex <= rightIndex){
      let middleIndex = Math.floor((leftIndex+rightIndex) / 2)

      if(target === arr[middleIndex]){
        return middleIndex
      }

      if(target < arr[middleIndex]){
        rightIndex = middleIndex-1
      }
      else{
        leftIndex = middleIndex+1
      }
    }

    return -1
    // big-o = O(log(n))
  }
  // console.log(binarySearch([2, 4, 5, 8, 9, 12, 34, 56], 12))



  // binary search recursive
  function recursiveBinary(arr, target){
    return search(arr, target, 0, arr.length-1)
  }
  function search(arr, target, leftIndex, rightIndex){
    if(leftIndex>rightIndex){
      return -1
      // base case
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2);
    
    if(target === arr[middleIndex]){
      return middleIndex
      // base case
    }

    if(target<arr[middleIndex]){
      return search(arr,target,leftIndex,middleIndex-1)
      // recursive
    }
    else{
      return search(arr, target, middleIndex+1, rightIndex)
      // recursive
    }
    // big-O = O(log(n))
  }
  // console.log(recursiveBinary([3,5,7,9,12,14,16],12))
}
