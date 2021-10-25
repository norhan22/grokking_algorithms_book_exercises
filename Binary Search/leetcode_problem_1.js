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
  let result = -1

  let
    minIndex = 0,
    maxIndex = nums.length - 1 // those for keeping track of which part of the list I’ll search in

  // While you haven’t narrowed it down to one element
  while (minIndex <= maxIndex) {
    // check the middle element
    const midIndex = (minIndex + maxIndex) / 2
    //  Check the target
    if (target === nums[midIndex]) result = midIndex
    else if (target > nums[midIndex]) minIndex = midIndex + 1
    else maxIndex = midIndex - 1
  }

  return result
}
