/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let obj = {};
    let maxSourceKey = 0, maxSource = 0;
    let retArr = [];



    for (let it of prerequisites) {
        let source = it[1];
        let dest = it[0];
        if (obj[source] == 0 || obj[source]) {
            obj[source].push(dest);
        } else {
            obj[source] = [dest];
        }

        if (obj[source].length > maxSourceKey) {
            maxSource = source;
            maxSourceKey = obj[source].length
        }
    }
    let queue = [];
    queue.push(maxSource);

    let count = 0;
    while (queue.length) {

        let first = queue.shift();
        retArr.push(first);

        count++;
        if (count > numCourses) {
            return [];
        }


        obj[first]?.map((it) => {
            if (it != queue[queue.length - 1]) {
                queue.push(it);
            }
        })
    }
    if (retArr.length != numCourses) {
        for (let i = 0; i < numCourses; i++) {
            if (retArr.indexOf(i) == -1) {
                retArr.push(i);
            }
        }
    }
    return retArr;
};



console.log(findOrder(3, [[2, 0], [2, 1]]))