/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let retArr = [];
    let strArr = s.split("").sort((a, b) => a - b);

    function findCombination(arr, strArr) {
        if (!arr.length) {
            retArr.push([...strArr]);
        }
        // else if (arr.length == 1) {
        //     retArr.push([...strArr, arr[0]]);
        // }
        for (let i = 1; i <= arr.length; i++) {
            if (isPlalindrom(arr.slice(0, i))) {
                strArr.push(arr.slice(0, i).join(''))
                findCombination(arr.slice(i), strArr)
                strArr.pop()
            }
        }
        return;
    }

    findCombination(strArr, []);

    return retArr;
};


/**
 * @param {string} s
 * @return {string[][]}
 */

function isPlalindrom(arr) {
    let l = 0, r = arr.length - 1

    while (l < r) {
        if (arr[l++] !== arr[r--]) return false
    }

    return true
}


partition("bb");

let obj = {
    1: Node,
    2: Node,
    3: Node,
    4: Node
}


1 -> 2
1 -> 4


if (!obj[Node.val]) {

}


[1]

[2, 4]
