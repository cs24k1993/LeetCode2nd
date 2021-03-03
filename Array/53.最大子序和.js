// 1. 贪心算法
// 若当前指针所指元素之前的和小于 0，则丢弃当前元素之前的数列
function maxSubArray(nums) {
  cur_sum = nums[0];
  max_sum = nums[0]
  for (let i=1; i<nums.length; i++) {
    // cur_sum小于 0 时，则cur_sum值变为nums[i]，舍弃之前的cur_sum
    cur_sum = Math.max(cur_sum + nums[i], nums[i]);
    max_sum = Math.max( max_sum, cur_sum);
  }
  return max_sum;
}

console.log(maxSubArray([2,3,-2,2,4]));
console.log(maxSubArray([-10,-3,-2,-2,-4]));


// 2. 动态规划
// 通过拆分问题，定义状态和状态之间的关系，使得问题能够以递推（或者说分治）的方式去解决
function maxSubArray2(nums) {
  pre_sum = 0;
  max_sum = nums[0];
  nums.forEach((x) => {
    pre_sum = Math.max(pre_sum + x, x);
    max_sum = Math.max(max_sum, pre_sum);
  })
  return max_sum;
}

console.log(maxSubArray2([2,3,-2,2,4]));
console.log(maxSubArray2([-10,-3,-2,-2,-4]));
