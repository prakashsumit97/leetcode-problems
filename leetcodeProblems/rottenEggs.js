/**
 * 1 is fresh egg
 * 0 is no egg
 * 2 is rotten egg
 * @param {*} arr 
 */


function findTimeToGetAllEggGetRooten(arr) {
    let noOfTime = 0;
    let rottenEgg = [];

    let rowLength = arr.length;
    let columnLength = arr[0].length;

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (arr[i][j] == 2) {
                rottenEgg.push({ row: i, column: j })
            }
        }
    }


    if (rottenEgg.length) {
        while (rottenEgg.length) {
            let newRottenEgg = [];
            while (rottenEgg.length) {
                let rottenEggIndex = rottenEgg.pop();
                let { row, column } = rottenEggIndex;
                arr[row][column] = -1;
                if (row > 0 && arr[row - 1][column] == 1) {
                    newRottenEgg.push({ row: row - 1, column: column });
                    arr[row - 1][column] = 2;
                }

                if (row < rowLength - 1 && arr[row + 1][column] == 1) {
                    newRottenEgg.push({ row: row + 1, column: column });
                    arr[row - 1][column] = 2;
                }

                if (column > 0 && arr[row][column - 1] == 1) {
                    newRottenEgg.push({ row: row, column: column - 1 });
                    arr[row][column - 1] = 2;
                }

                if (column < columnLength - 1 && arr[row][column + 1] == 1) {
                    newRottenEgg.push({ row: row, column: column + 1 });
                    arr[row][column + 1] = 2;
                }

            }

            if (newRottenEgg.length) {
                rottenEgg = newRottenEgg;
                noOfTime++;
            } else {
                return noOfTime;
            }
        }
    }

    return noOfTime;
}


let newArr = [
    [2, 1, 1],
    [0, 0, 0],
    [2, 1, 0]
]


console.log(findTimeToGetAllEggGetRooten(newArr))