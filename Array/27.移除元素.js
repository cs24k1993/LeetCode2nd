// 双指针法，一个指针记录前面不相等的元素的下一个位置
// 另一个指针寻找不是val的值赋值到 i 位置
function removeElement(arr, val) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
}

console.log(removeElement([1,2,5,2,4,2,6], 2));