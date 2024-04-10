/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;

    let sum = 0;

    if (sum >= target) {
        return 1;
    }

    let minLen = Infinity;

    while (right < nums.length) {
        if (nums[right] >= target) {
            return 1;
        }
        sum += nums[right];

        if (sum >= target) {
            while (sum >= target) {
                if (sum - nums[left] >= target) {
                    sum -= nums[left];
                    left++;
                } else {
                    break;
                }
            }

            minLen = Math.min(minLen, right - left + 1);
        }

        right++;

    }

    return minLen == Infinity ? 0 : minLen;
};
// the tardebigge pub, 1911 Hewell Ln, Hewell  Lane, Redditch
// B976QL
// Redditch
// 1911


console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))