/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let list = new Map();

    for (const [index, it] of equations.entries()) {
        let arr = list.get(it[0]) || [];
        arr.push([it[1], values[index]]);
        list.set(it[0], arr);

        let newArr = list.get(it[1]) || [];
        newArr.push([it[0], (1 / values[index])])
        list.set(it[1], newArr)
    }

    let res = [];
    let index = -1;
    for (let [ind, q] of queries.entries()) {
        res[ind] = -1;
        index = ind;

        if (list.get(q[0])) {
            if (q[0] == q[1]) {
                res[ind] = 1;
            } else {
                bfs([q[0]], 1, {}, q[1]);
            }
        }

    }

    function bfs(queue, currSum, objVisi, end) {
        if (queue.length) {
            let item = queue.pop();
            objVisi[item] = true;
            let nextItem = list.get(item);

            for (let it of nextItem) {
                if (!objVisi[it[0]]) {
                    currSum *= it[1];
                    if (it[0] == end) {
                        res[index] = currSum;
                        return currSum;
                    }
                    queue.push(it[0]);
                    bfs(queue, currSum, objVisi, end);
                    currSum /= it[1];
                }
            }

        } else {
            return -1;
        }
    }

    return res;
};


console.log(calcEquation([["x1", "x2"], ["x2", "x3"], ["x3", "x4"], ["x4", "x5"]], [3.0, 4.0, 5.0, 6.0],
    [["x2", "x4"]]))