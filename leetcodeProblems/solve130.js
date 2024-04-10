var solve = function (board) {
    if (board.length == 0) return null

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'O' && (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1)) {
                dfs(board, i, j)
            }
        }
    }


    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'W') {
                board[i][j] = 'O'
            }
            else {
                board[i][j] = 'X'
            }
        }
    }

    return board
};

function dfs(board, i, j) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] == 'X' || board[i][j] == 'W') {
        return
    }
    board[i][j] = 'W';
    dfs(board, i + 1, j)
    dfs(board, i - 1, j)
    dfs(board, i, j + 1)
    dfs(board, i, j - 1)
    return
}


console.log(solve([["O", "X", "X", "O", "X"], ["X", "O", "O", "X", "O"], ["X", "O", "X", "O", "X"], ["O", "X", "O", "O", "O"], ["X", "X", "O", "X", "O"]]));


/**
 * [
 *  ["O", "X", "X", "O", "X"], 
 *  ["X", "O", "O", "X", "O"], 
 *  ["X", "O", "X", "O", "X"], 
 *  ["O", "X", "O", "O", "O"], 
 *  ["X", "X", "O", "X", "O"]
 * ]
 * 
 * 
 * [
 *  ["O","X","X","O","X"],
 *  ["X","X","X","X","O"],
 *  ["X","X","X","X","X"],
 *  ["O","X","O","O","O"],
 *  ["X","X","O","X","O"]
 * ]
 * 
 * 
 * [
 *  ["O","X","X","O","X"],
 *  ["X","X","X","X","O"],
 *  ["X","X","X","O","X"],
 *  ["O","X","O","O","O"],
 *  ["X","X","O","X","O"]
 * ]
 */