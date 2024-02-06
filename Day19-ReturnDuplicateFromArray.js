// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3


function findDuplicate(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen.has(num)) {
      return num;
    }

    seen.add(num);
  }
}

const nums1 = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums1)); //2

const nums2 = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums2)); //3
