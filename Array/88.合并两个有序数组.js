// 从后往前合并。两个指针m1，m2，比较指针处元素的大小，最大的放到尾部
function merge(nums1, m, nums2, n) {
  let m1 = m - 1;
  let n1 = n - 1;
  let len = m + n - 1;
  while (m1 >= 0 && n1 >= 0) {
    nums1[len--] = nums1[m1] >= nums2[n1] ? nums1[m1--] : nums2[n1--];
  }
  // nums1 nums2非等长情况
  while (m1 >= 0) {
    nums1[len--] = nums1[m1--];
  }
  while (n1 >= 0) {
    nums1[len--] = nums2[n1--];
  }
  return nums1;

}

console.log(merge([1,2,5],3,[2,3,7],3));