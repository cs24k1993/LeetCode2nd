// 两种情况：一是末尾不为9，直接加1后return。如果有进位，进位后再return
// 另一种是全为9时，比如9999，需要最前面加个1，拼一起
function plusOne(nums) {
  for (let i=nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 9) {
      nums[i]++;
      return nums;
    } else {
      nums[i] = 0;
    }
  }
  
  let result = [1].concat(nums);
  return result;
}

console.log(plusOne([5,9,9,6]));