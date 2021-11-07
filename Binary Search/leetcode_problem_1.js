/**

* The Problem
Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

** NOTE: You must write an algorithm with O(log n) runtime complexity.
Codepen:  https://codepen.io/norhan22/pen/VwzPyEQ

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//////////////////////
// simple search
//////////////////////
const simpleSearch = function (nums, target) {
  let result = -1

  // SOL.1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) result = i
  }

  //SOL.2
  if (nums.includes(target)) result = nums.indexOf(target)

  return result
}

const simpleSearchShort = (nums, target) => (nums.includes(target) ? nums.indexOf(target) : -1)

//////////////////////
// Binary search
//////////////////////
const binarySearch = function (nums, target) {
  let result = -1,
    minIndex = 0,
    maxIndex = nums.length - 1 // those for keeping track of which part of the list I’ll search in

  // While you haven’t narrowed it down to one element
  while (minIndex <= maxIndex) {
    // check the middle element
    const
      midIndex = Math.floor((minIndex + maxIndex) / 2),
      geuss = nums[midIndex]
    //  Check the target
    if (geuss === target) return result=  midIndex
    else if (geuss > target) maxIndex = midIndex - 1
    else minIndex = midIndex + 1
  }

  return result
}
const binarySearchArrayOfObjects = (targetValue, key, sortedArr) {
      
      let minIndex = 0, maxIndex = sortedArr.length - 1
      try {
        while (minIndex <= maxIndex) {
          const
            midIndex = Math.floor((minIndex + maxIndex) / 2),
            geuss  = arr[midIndex]
          if (geuss[key] === targetValue) return geuss
          else if (geuss[key] > targetValue) maxIndex = midIndex - 1
          else  minIndex = midIndex + 1
        }
      } catch (err) {
        console.log('binarySearchArrayOfObjects', err)
      }


}
    const myList = [1, 3, 5, 7, 9];
console.clear();
console.log("binarySearch", binarySearch(myList, 5)); // 2
console.log("simpleSearch", simpleSearch(myList, 3)); // 1
console.log("binarySearch", binarySearch(myList, -1)); // -1
console.log("simpleSearch", simpleSearch(myList, -1)); // -1