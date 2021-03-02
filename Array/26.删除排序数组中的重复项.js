// 1. Set去重
function deleteRepeat(arr) {
  return Array.from(new Set(arr));
}

console.log(deleteRepeat([1,1,2]));


// 2. 快慢指针，读指针和写指针，两个同时向数组尾部移动
function removeDuplicates(arr) {
  let p1 = 0;
  let p2 = 0;
  while(p2 < arr.length) {
    if (arr[p1] !== arr[p2]) {
      p1++;
      arr[p1] = arr[p2];
    }
    p2++;
  }
  return p1+1;
}

console.log(removeDuplicates([1,1,2,2,6,9]));