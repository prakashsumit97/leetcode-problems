/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (board.length * board[0].length < word.length) {
        return false;
    }

    let result = false;

    var check = function (board, word, i = 0, j = 0, index = 0) {
        if (board[i][j] == word[index]) {


            if (word.length - 1 == index) {
                result = true;
                return true;
            }


            //check left
            if ((j < board[0].length - 1) && board[i][j + 1] == word[index + 1]) {
                board[i][j] = null;
                check(board, word, i, j + 1, index + 1);
            }

            //check right
            if (j > 0 && board[i][j - 1] == word[index + 1]) {
                board[i][j] = null;
                check(board, word, i, j - 1, index + 1);
            }

            //check up
            if (i > 0 && board[i - 1][j] == word[index + 1]) {
                board[i][j] = null;
                retVal = check(board, word, i - 1, j, index + 1);
            }

            //down
            if (i < board.length - 1 && board[i + 1][j] == word[index + 1]) {
                board[i][j] = null;
                check(board, word, i + 1, j, index + 1);
            }

            board[i][j] = word[index];
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            check(board, word, i, j)
            if (result) return result;
        }
    }



    return false;
};


