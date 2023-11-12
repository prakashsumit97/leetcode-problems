/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

    let retRes = [];

    if (!intervals.length) {
        return [newInterval];
    } else {
        let currInterval = newInterval;
        let preInterval = intervals[0];

        if (intervals.length == 1) {
            if (checkCondition(currInterval,preInterval)) {
                const currArr = [preInterval[0] < currInterval[0] ? preInterval[0] : currInterval[0],
                currInterval[1] > preInterval[1] ? currInterval[1] : preInterval[1]];
                retRes[retRes.length - 1] = currArr;
                intervals[0] = currArr;
            } else if (currInterval[0] >= preInterval[0] && currInterval[1] >= preInterval[1]) {
                intervals.push(currInterval)
            } else {
                return [currInterval, preInterval]
            }
            return intervals;
        } else if (currInterval[0] < preInterval[0] && currInterval[1] < preInterval[1]) {
            intervals = [currInterval, ...intervals]
        }

    }




    intervals.sort((a, b) => a[0] - b[0])
    retRes.push(intervals[0]);
    let newIntDone = false;

    for (let i = 1; i < intervals.length;) {
        let currInterval = intervals[i];
        let preInterval = intervals[i - 1];
        if (!newIntDone) {
            let insInterval = newInterval;

            if (checkCondition(insInterval,preInterval)) {
                currInterval = insInterval;
                newIntDone = true;
            } else {
                i++;
            }
        } else {
            i++;
        }


        if (checkCondition(currInterval,preInterval)) {
            const currArr = [preInterval[0] < currInterval[0] ? preInterval[0] : currInterval[0],
            currInterval[1] > preInterval[1] ? currInterval[1] : preInterval[1]];
            retRes[retRes.length - 1] = currArr;
            if (newIntDone) {
                intervals[i - 1] = currArr;
            } else {
                intervals[i] = currArr;
            }
        } else {
            retRes.push(currInterval);
        }
    }
    if (!newIntDone) {
        let currInterval = newInterval;
        let preInterval = retRes[retRes.length-1];

        if (checkCondition(newInterval,retRes[retRes.length-1])) {
            const currArr = [preInterval[0] < currInterval[0] ? preInterval[0] : currInterval[0],
            currInterval[1] > preInterval[1] ? currInterval[1] : preInterval[1]];
            retRes[retRes.length - 1] = currArr;
        } else {
            retRes.push(currInterval);
            retRes.sort((a, b) => a[0] - b[0])
        }
    }

    return retRes;
};


function checkCondition(currInterval,preInterval){
    return (currInterval[0] >= preInterval[0] && currInterval[0] <= preInterval[1]) ||
    currInterval[1] >= preInterval[0] && currInterval[0] <= preInterval[1]
}


console.log(insert([[3,5],[12,15]], [6,6]))