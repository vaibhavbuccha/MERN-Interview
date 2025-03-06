/***
 * 
 * 189. Rotate Array
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * 
 * Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 * 
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


/*

This is one solution but not optimal

var rotate = function(nums, k) {
    for( let i = 0; i < k ; i++){
        const lastPosition = nums?.[nums?.length - 1];
        nums.length = nums?.length - 1
        nums = [lastPosition, ...nums];
    }

    return nums
};


console.log(rotate([1,2,3,4,5,6,7], 3))

*/

var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // In case k is larger than the array length

    // Helper function to reverse a section of the array
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    // Step 1: Reverse the entire array
    reverse(0, n - 1);
    // Step 2: Reverse the first k elements
    reverse(0, k - 1);
    // Step 3: Reverse the remaining n - k elements
    reverse(k, n - 1);
};