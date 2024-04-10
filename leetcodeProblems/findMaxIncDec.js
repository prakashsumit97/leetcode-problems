function findMaxLength(inpArr) {
    let maxLength = 1;
    let arr = [{
        inc: 0,
        dec: 0
    }]


    for (let i = 1; i < inpArr.length; i++) {
        let lastVal = arr[i - 1];
        let newVal = {
            inc: lastVal.inc,
            dec: lastVal.dec
        }
        if (inpArr[i] > inpArr[i - 1]) {
            newVal.inc += 1;
        } else if (inpArr[i] < inpArr[i - 1]) {
            newVal.dec += 1;
        }
        maxLength = Math.max(lastVal.inc, lastVal.dec, maxLength);
        arr.push(newVal);
    }

    return maxLength;
}



console.log(findMaxLength([1, 2, 3, 2, 1, 4, 5, 6]));