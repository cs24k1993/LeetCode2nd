// 数组去重：数组中的数据类型可能不同
// https://juejin.im/post/5949d85f61ff4b006c0de98b#heading-0
// 第一种：双层循环
var array1 = [1,1,'1','1'];
function unique1(array) {
    // res 存储结果
    var res = [];
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < res.length; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if(j === res.length) {
            res.push(array[i]);
        }
    }
    return res
}
console.log(unique1(array1));


// 第二种：排序后去重
var array2 = [1,1,'1','2'];
function unique2(array) {
    var res = [];
    var sortedArray = array.concat().sort();
    var seen;
    for (var i = 0; i < sortedArray.length; i++) {
        // 如果是第一个元素或者相邻元素不相同
        if (!i || seen !== sortedArray[i]) {
            res.push(sortedArray[i]);
        }
        seen = sortedArray[i];
    }
    return res;
}
console.log(unique2(array2));


// 第三种：set去重
var spread = [12, 5, 8, 8, 130, 44,130];
var setFun = [...new Set(spread)];
console.log('数组去重结果', setFun, typeof setFun);


// 第四种：filter方法。数组filter传入三个参数；indexOf返回匹配到的第一个值的索引，没有返回-1。
var spread = [12, 5, 8, 8,'1',1,44];
var filtered = spread.filter((item, idx, arr) => {
    return arr.indexOf(item) === idx;
})
// 筛选符合条件找到的第一个索引值等于当前索引值的数组
console.log('数组去重结果', filtered)


set1 = [...new Set([1,2])];
console.log(typeof set1);
