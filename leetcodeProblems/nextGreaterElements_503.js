/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let nge = new Array(n).fill(-1);
    let stack = [];

    for (let i = 0; i < 2 * n; i++) {
        while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
            nge[stack.pop()] = nums[i % n];
        }
        if (i < n) stack.push(i);
    }
    return nge;
};



console.log(nextGreaterElements([1, 2, 3, 4, 5, 6, 5, 4, 5, 1, 2, 3]))