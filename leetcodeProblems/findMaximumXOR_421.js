/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let max = nums[0];
    // console.log(max);
    nums.forEach(num => {
        max = Math.max(max, num)
        // console.log(num);
    })
    let maxXor = 0;
    // console.log(max);
    const L = max.toString(2).length // Convert a number to a string, using base 2 (binary):
    // console.log(L);
    const prefixes = new Set();

    for (let i = L - 1; i >= 0; i--) {
        maxXor = maxXor << 1
        // console.log(maxXor);
        const curXor = maxXor | 1
        // console.log(curXor);
        const hasPartner = nums.find(num => {
            const prefix = num >> i
            // console.log(prefix);
            prefixes.add(prefix)
            // console.log(prefixes.has(prefix^curXor));
            return prefixes.has(prefix ^ curXor)
        })
        // console.log(hasPartner);
        if (hasPartner !== undefined) {
            maxXor = curXor
            console.log(maxXor);
        }
        prefixes.clear()
    }
    return maxXor;
};

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8])); // Output: 28
