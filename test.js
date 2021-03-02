function two(nums,target) {
    obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in obj) {
            return [obj[target - nums[i]], i];
        } else {
            obj[nums[i]] = i;
        }
    }
}
console.log(two([2,7,9,11], 9))
