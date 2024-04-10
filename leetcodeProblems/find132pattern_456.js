/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let stack = [];
    let c = Number.MIN_SAFE_INTEGER;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (c > nums[i]) {
            return true;
        }
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            c = stack.pop();
        }
        stack.push(nums[i]);
    }

    return false;
};



console.log(find132pattern([3, 5, 0, 3, 4]))


