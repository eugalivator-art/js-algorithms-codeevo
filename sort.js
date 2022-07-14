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
  function insertionSort(arr){
     for(let i=1; i<arr.length-1 ; i++){
       let nuberToInsert = arr[i];
       let j = i-1

       while(j>0 && arr[j] > numberToInsert){
        arr[j+1] = arr[j]
        j = j-1
       }
      //   while is to change the j and arr[j], some swapping

       arr[j+1] = numberToInsert
      //  insertion happens here
     }
  }
  // console.log(insertionSort([8,16,4,12,-5]))

}