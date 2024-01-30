function pivotIndex(nums) {
  let totalSum = nums.reduce((acc, num) => acc + num, 0);

  let runningSum = 0;

  for (i = 0; i < nums.length; i++) {
    if ((totalSum - nums[i]) / 2 == runningSum) {
      return i;
    } else {
      runningSum += nums[i];
    }
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3
console.log(pivotIndex([1, 2, 3])); //-1
console.log(pivotIndex([2, 1, -1])); //0
