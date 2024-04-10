function findNoOfWay(inp1, inp2, inp3) {
    let noOfWays = 0;
    let currVal = inp2;
    let maxLength = inp1;


    function dfs(curr, total, str) {
        if (!total) {
            if (curr == currVal) {
                noOfWays++;
            }
            return;
        }

        for (let i = 1; i <= maxLength; i++) {
            let currNum = curr + i;

            if (currNum > maxLength) {
                currNum = currNum % maxLength;
            }

            if (curr !== currNum) {
                if (currNum % curr == 0 || curr % currNum == 0) {
                    dfs(currNum, total - 1, str + currNum);
                }
            }
        }
    }


    dfs(currVal, inp3, '')

    return noOfWays;
}


console.log(findNoOfWay(3, 2, 4))