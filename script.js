//To create a message on the screen
const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector("#end-message").innerHTML = message;
    }
    return{
        renderMessage
    }
})();

//Handles aspects of the Gameboard Interaction
const Gameboard = (() => {
    let gameboard = ["","","","","","","","",""];

    const drawBoard = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        })
        document.querySelector('.gameboard').innerHTML = boardHTML;
        const squares = document.querySelectorAll(".square")
        squares.forEach((square) => {
        square.addEventListener("click", Game.handleClick);
        })
    }
    const update = (index, value) => {
        gameboard[index] = value;
        drawBoard();
    }
    const getGameboard = () => gameboard;

    return {
        drawBoard,
        update,
        getGameboard
    }
})();

//Check status of gameboard functions
function checkForWin(board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]    
    ]
    for(let i = 0; i < winningCombinations.length; i++){
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            return true;
        }
    }
    return false;
}

function checkForTie(board){
    return board.every(cell => cell !== "")
}

//Creates the players
const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

//Game Function (runs the game)
const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;
    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.drawBoard();

    }
    const handleClick = (event) => {
        if(gameOver) {return;}
        let index = parseInt(event.target.id.split("-")[1]);
        if (Gameboard.getGameboard()[index] !== ""){
            return
        }
        Gameboard.update(index, players[currentPlayerIndex].mark);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        if(checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)){
            gameOver = true;
            displayController.renderMessage(`${players[currentPlayerIndex].name} Wins!`);
        } else if (checkForTie(Gameboard.getGameboard())) {
            gameOver = true;
            displayController.renderMessage(`Its a draw...`);
        };
    }
    const restart = () => {
        for(let i = 0; i < 9; i++){
            Gameboard.update(i, "");
        }
        Gameboard.drawBoard();
        gameOver = false;
        document.querySelector("#end-message").innerHTML = "";
    }
    return{
        start,
        handleClick,
        restart
    }
})();

//Handles control buttons
const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () =>{
    Game.restart();
    });

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
        Game.start();
    })

