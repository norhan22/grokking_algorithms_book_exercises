 /*
 * 278. First Bad Version
 * https://leetcode.com/problems/first-bad-version/
 *
 * The Problem
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions after a bad version are also bad.

  */
 /**
  * Definition for isBadVersion()
  *
  * @param {integer} version number
  * @return {boolean} whether the version is bad
  * isBadVersion = function(version) {
  *     ...
  * };
  */

 /**
  * @param {function} isBadVersion()
  * @return {function}
  */
 var solution = function(isBadVersion) {
     /**
      * @param {integer} n Total versions
      * @return {integer} The first bad version
      */
     return function(n) {
         let min= 1 , max = n
         while(min < max){
             // get the mid value ( 1 +( (5-1 )/2)) = 3
             let mid = Math.floor(min + ((max-min)/2))
             // if badVersion the max value = mid
             if(isBadVersion(mid)) max = mid
             else min= mid+1 // else start check from next value of mid
         }

         return min // return the first bad version
     };
 };

 //Usage  input n = 5, bad = 4
 solution(5)
 // Output: 4