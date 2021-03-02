// 二分查找
function searchInsert(nums, target) {
  let l = 0;
  // r的值不能是 nums.length - 1（因为可能插入到数组最后的位置）
  let r = nums.length;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

console.log(searchInsert([1,2,5], 3));
console.log(searchInsert([1,3,5,6], 7));