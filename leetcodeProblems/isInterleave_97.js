/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    let status = false;
    function interlve(str, str1, str2) {
        let matchFound = false;
        if (!str?.length) {
            if (!str1?.length && !str2?.length) {
                status = true;
                return true;
            }
            return;
        }


        if (str[0] == str1[0]) {
            let index = 0;
            while (str[index] == str1[index]) {
                if (index < str.length || index < str1.length) {
                    index++;
                } else {
                    break;
                }
            }
            let res = interlve(str.slice(index), str1.slice(index), str2);
            if (res) {
                return res;
            }
            matchFound = true;
        }

        if (str[0] == str2[0]) {
            let index = 0;
            while (str[index] == str2[index]) {
                if (index < str.length || index < str2.length) {
                    index++;
                } else {
                    break;
                }
            }
            let res = interlve(str.slice(index), str1, str2.slice(index));
            if (res) {
                return res;
            }
            matchFound = true;
        }

        // if (!matchFound) {
        //     return false;
        // }
    }

    interlve(s3, s1, s2);

    return status;
};


console.log(isInterleave("aabcc", "dbbca", "aadbcbbcac"))

Bawaal@2023