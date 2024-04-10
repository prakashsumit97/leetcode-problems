/**
 * Input: {a: {b: {c: 1}}, d: 2}
   Output: [{key: 'a.b.c', value: 1}, {key: 'd', value: 2}]
 */



function flattenObject(obj) {
    let retArr = [];

    function flattenObj(obje, key) {
        for (let k in obje) {
            if (typeof obje[k] == 'number') {
                retArr.push({ key: key ? key + '.' + k : k, value: obje[k] });
            } else {
                flattenObj(obje[k], key ? key + '.' + k : k);
            }
        }
    }

    flattenObj(obj, '');

    return retArr;
}

const obj = { a: { b: { c: 1 } }, d: 2, c: { l: { m: 4 } } };

console.log(flattenObject(obj))