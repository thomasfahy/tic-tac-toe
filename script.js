
const TicTacToeBoard = () => {
    let gameBoard = Array[
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let placeMark = (row, col, mark) => {
        if (gameBoard[row][col] === ''){
            gameBoard[row][col] = mark;
            return true;
        }
        return false;
    }

    const checkWinner = () => {
        const winningCombinations = [
            // Vertical Winners
            [ [0, 0], [0, 1], [0, 2] ],
            [ [1, 0], [1, 1], [1, 2] ],
            [ [2, 0], [2, 1], [2, 2] ],
            //Vertical Winners
            [ [0, 0], [1, 0], [2, 0] ],
            [ [0, 1], [1, 1], [2, 1] ],
            [ [0, 2], [1, 2], [2, 2] ],
            //Diagonal Winners
            [ [0, 0], [1, 1], [2, 2] ],
            [ [0, 2], [1, 1], [2, 0] ]
        ];
    }


    return {
        placeMark,
        checkWinner
    }
}



console.log(TicTacToeBoard.gameBoard);