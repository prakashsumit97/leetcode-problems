/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    if (nums.length == 1) {
        if (nums[0] == target) return true;
        else return false;
    }
    while (left < right) {

        if (nums[left] == target || nums[right] == target) {
            return true;
        }

        if (left > 0 && ((nums[left] == nums[left - 1]))) {
            while (nums[left] == nums[left - 1]) {
                left++;
            }
        }
        else if (right > 0 && (nums[right] == nums[right - 1])) {
            while (nums[right] == nums[right - 1]) {
                right--;
            }
        }

        if (nums[left] == target || nums[right] == target) {
            return true;
        }

        left++;
    }
    return false;
};


console.log(search([2, 2, 2, 3, 2, 2, 2], 3))


