/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let overLapCount = 0;
    let prevVal = intervals[0];
    let currVal;

    for (let i = 1; i < intervals.length; i++) {
        currVal = intervals[i];

        if (currVal[0] >= prevVal[1]) {
            prevVal = currVal;
        } else {
            overLapCount++;
            prevVal[1] = Math.min(prevVal[1], currVal[1])
        }
    }

    return overLapCount;
};


console.log(eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]]))

/**
 * [0,1][3,4][1,2]
 * [0,1][1,2][3,4]
 * 
 * [[1,2],[2,3],[3,4],[1,3]]
 * [1,2][1,3][2,3][3,4]
 * 1,2,1,3,2,3,3,4
 */