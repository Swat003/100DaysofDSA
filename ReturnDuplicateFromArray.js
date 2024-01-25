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
