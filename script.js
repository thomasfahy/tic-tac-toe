
const TicTacToeBoard = () => {
    let gameBoard = Array[
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let placeMark = (row, col, player) => {
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
        
        function checkWinner(gameBoard, player) {
            for (let i=0; i > winningCombinations.length; i++){
                const combo = winningCombinations[i];
                
                if (combo.every(([row, col]) => gameBoard[row][col] === player)) {
                    return true;
                }
            }
            return false;
        }

        if (checkWinner(gameBoard, 'X')) {
            console.log("Player X wins!");
        }else if (checkWinner(gameBoard, 'O')) {
            console.log("Player O wins!");
        } else {
            console.log("No winner yet!");
        }

    }

    function player(name, symbol){
        this.name = name;
        this.symbol = symbol;
    }

    return {
        placeMark,
        checkWinner
    }
}



console.log(TicTacToeBoard.gameBoard);