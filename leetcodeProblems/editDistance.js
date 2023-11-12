/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

    if (word1 == word2) {
        return 0;
    } else if (!word1?.length && !word2?.length) {
        return 0;
    } else if (!word1?.length) {
        return word2.length;
    } else if (!word2?.length) {
        return word1.length;
    }

    if (word2.length > word1.length) {
        let temp = word1;
        word1 = word2;
        word2 = temp;
    }



    let arr = new Array(word1.length + 1);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(word2.length + 1).fill(0);
    }
    let j = 0, word2Len = word2.length;
    for (let i = arr.length - 1; i > -1; i--) {
        arr[j][arr[0].length - 1] = i;
        if (word2Len >= 0) arr[arr.length - 1][j] = word2Len;
        j++;
        word2Len--;
    }


    for (let i = arr.length - 2; i >= 0; i--) {
        for (let j = arr[0].length - 2; j >= 0; j--) {
            if (word1[i] == word2[j]) {
                arr[i][j] = arr[i + 1][j + 1];
            } else {
                let insert = arr[i][j + 1];
                let delet = arr[i + 1][j];
                let replace = arr[i + 1][j + 1];

                arr[i][j] = Math.min(insert, delet, replace) + 1;
            }
        }
    }


    return arr[0][0];
};


console.log(minDistance("teacher", "treachery"))