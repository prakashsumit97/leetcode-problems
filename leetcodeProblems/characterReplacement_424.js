
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (str, kth) {
    let l = 0;
    let obj = {};
    let maxCharLength = 0;
    let maxCharCount = 0;
    let currWinLength = 0;


    for (let r = 0; r < str.length; r++) {

        if (!obj[str[r]]) {
            obj[str[r]] = 1;
        } else {
            obj[str[r]] += 1;
        }

        maxCharCount = Math.max(maxCharCount, obj[str[r]]);

        currWinLength = r - l + 1;

        if (currWinLength - maxCharCount <= kth) {
            maxCharLength = currWinLength;
        } else {
            obj[str[l]] = obj[str[l]] - 1;
            l++;
        }

    }
    return maxCharLength;
};


console.log(characterReplacement("AABABBA", 0));


