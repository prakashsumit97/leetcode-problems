/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));

    let orderedList = [];

    for (let p of people) {
        orderedList.splice(p[1], 0, p)
    }
    return orderedList;
};


console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]))