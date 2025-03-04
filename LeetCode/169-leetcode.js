/**
 * 
 * 169. Majority Element
 * 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 * 
 * 
 * 
*/


/**
 * @param {number[]} nums
 * @return {number}
 * 
 * To solve this problem we need to create an hash map
 * 
 * which collect the number of occurance of the perticular number 
 * 
 * then we need to return the key which is occured more then n/2 times
 */
var majorityElement = function(nums) {
    const hash = {} ;
    for (const num of nums ){
        if(hash[num]){
            hash[num] = hash[num] + 1 
        }else{
            hash[num] = 1
        }
    }

    for(const key in hash){
        if(hash[key] > Math.floor( nums?.length /2 ) ){
            return parseInt(key)
        }
    }
};