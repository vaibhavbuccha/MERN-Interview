/***
 * 
 * 
 * Given an array, arr[]. Sort the array using bubble sort algorithm.
 * 
 * Examples :
 * Input: arr[] = [4, 1, 3, 9, 7]
 * Output: [1, 3, 4, 7, 9]
 * 
 * Input: arr[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 
 * Input: arr[] = [1, 2, 3, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 * Explanation: An array that is already sorted should remain unchanged after applying bubble sort.
 * 
 */


/**
 * @param {number[]} arr
 */
class Solution {
    // Function to sort the array using bubble sort algorithm.
    bubbleSort(arr) {
        // code here
       let result ;
  
	const sortfunction = (arr2) => {
    let isSwipe = false;

    for(let i =1; i< arr2?.length ; i++){
      if(arr2[i-1] > arr2[i]){
        let a = arr2[i-1]
        let b = arr2[i]
        arr2[i-1] = b 
        arr2[i] = a
        isSwipe= true
      }
    }
  		
     
   	if(isSwipe){
			sortfunction(arr2)
    }
    else{
    	
    	result = arr2
    }
	}
	sortfunction(arr);
	return 	result
    }
}
