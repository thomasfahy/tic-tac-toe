const Gameboard = (() => {
    let gameboard = ["","","","","","","","",""];

    const drawBoard = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        })
    document.querySelector('.gameboard').innerHTML = boardHTML;
    const squares = document.querySelectorAll(".square")
    console.log(squares);
    squares.forEach((square) => {
        square.addEventListener("click", Game.handleClick);
    })
    }


    return {
        drawBoard,
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

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
        console.log(event.target.id);
    }
    return{
        start,
        handleClick
    }
})();
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
})