/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let brackStack = [];
    let numStack = [];
    let strStack = [];
    let retStr = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '[') {
            brackStack.push(s[i]);
        } else if (s[i] == ']') {
            brackStack.pop();
            let num = numStack.pop();
            let str = strStack.pop();
            let repStr = str.repeat(num)

            if (strStack?.length && brackStack?.length == numStack?.length) {
                if (strStack[brackStack.length - 1]) {
                    strStack[brackStack.length - 1] += repStr;
                } else {
                    strStack.push(repStr);
                }
            } else {
                strStack.push(repStr);
            }
        } else if (s[i].match(/[0-9]/)) {
            let num = "";
            while (s[i] && s[i].match(/[0-9]/)) {
                num += s[i];
                i++;
            }
            i--;
            numStack.push(num);
        } else {
            let currStr = '';
            while (s[i] && s[i].match(/[a-z]/)) {
                currStr += s[i];
                i++;
            }
            i--;
            if (strStack[brackStack.length - 1]) {
                strStack[brackStack.length - 1] += currStr;
            } else {
                strStack.push(currStr);
            }
        }

        if (!numStack?.length && !brackStack?.length && strStack?.length) {
            let str = strStack.pop();
            retStr += str;
        }
    }
    return retStr;
};


console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"))


/**
 * zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef
 * zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef
 */