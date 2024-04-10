/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    return find(0, nums, S);
};

function find(p, nums, sum) {
    if (p === nums.length) {
        return sum === 0 ? 1 : 0;
    }
    return find(p + 1, nums, sum + nums[p]) + find(p + 1, nums, sum - nums[p]);
}



console.log(findTargetSumWays([0, 1], 1))
