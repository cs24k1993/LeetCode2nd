// 二分查找
function searchInsert(nums, target) {
  let l = 0;
  let r = nums.length-1;
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