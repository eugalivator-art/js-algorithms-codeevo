export default function sort(){
  console.warn('In sort algos');

  // bubble sort - a poor sorting algorithm
  // idea - compare the adjacent element in array and swap the positions if not intended order - there is do while and for and swapping
  function bubbleSort(arr){
    let swapped
    do{
      // using do while because we have to run array atleast once to check order
      swapped = false
      // to break loop in while
      for(let i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i=1]){
          let temp = arr[i]
          arr[i] = arr[i+1]
          arr[i+1]= temp
          // the above three lines are for swapping 
          swapped = true
        }
      }
    }
    while(swapped)
    // running the loop till swapping is going on
    // big-0 is O(n^2)
  }
  // console.log(bubbleSort([8,6,4,2,-5]))



  // insertion sort - split the array into sorted and unsorted parts and compare unsorted array with sorted parts, pick every element and insert it in comparision to every other elements
  // there is i=1; j=i-1; while condition in for loop, swap with j, assign arr[i]
  function insertionSort(arr){
     for(let i=1; i<arr.length-1 ; i++){
       let nuberToInsert = arr[i];
       let j = i-1

       while(j>0 && arr[j] > numberToInsert){
        arr[j+1] = arr[j]
        j = j-1
       }
      // while is to change the j and arr[j], some swapping - pushing the big number forward (or) duplicating the element to insert the proper element in its position

       arr[j+1] = numberToInsert
      //  insertion happens here
     }
  }
  // console.log(insertionSort([8,16,4,12,-5]))



  // Quick sort - take a pivot(basically any element) and sort the right and left part of the array - refer picture folder
  function quickSort(arr){
    if(arr.length<2){
      return arr;
      // base case to end recursive, if leght is less than 2 return arr
    }

    let pivot = arr[arr.length -1]
    let left = []
    let right = []

    for (i=0; i<arr.length-1; i++){
      if(arr[i]<pivot){
        left.push(arr[i])
      }
      else{
        right.push(arr[i])
      }
      // simple if less push to left else push to right
    }

    return [...quickSort(left),pivot,...quickSort(right)];
    // logic of quick sort, append sorted left, pivot and right array. also recussive technique is used
    // big O - worst case - n^2, avg case - nlogn
  }
  // console.log(insertionSort([8,16,4,12,-5]))


  // merge sort - divide the array into sub array of individual elements and then compare the first element of left and right array and push to new array accordingly. At the end merge all the arrays
  function mergeSort(arr){
    if(arr.length < 2){
      return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.splice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
    //  to make left and right array and pass to merge function
  }
  function merge(leftArr, rightArr){
    // divided into 2 functions

    const sortedArr = []

    while(leftArr.length && rightArr.length){
      if(leftArr[0]<= rightArr[0]){
        sortedArr.push(leftArr.shift())
        // pushing to leftarr whose first element is removed
      } else {
        sortedArr.push(rightArr.shift())
      }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
  }
  // big O - nlogn
  // console.log(insertionSort([8,16,4,12,-5]))
}