const cellZero = document.querySelector("#cellZero")
const cellOne = document.querySelector("#cellOne")
const cellTwo = document.querySelector("#cellTwo")
const cellThree = document.querySelector("#cellThree")
const cellFour = document.querySelector("#cellFour")
const cellFive = document.querySelector("#cellFive")
const cellSix = document.querySelector("#cellSix")
const cellSeven = document.querySelector("#cellSeven")
const cellEight = document.querySelector("#cellEight")

const gameboard = {
    gameboardCells: [cellZero, cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight],
    gameboardValues: ["","","","","","","","",""],
    turn: 0,
}

const ControlGameboard = (() => {

    const updateGameboard = () => {
        for ( let i = 0; i < gameboard.gameboardCells.length; i++) {
            gameboard.gameboardCells[i].textContent = gameboard.gameboardValues[i]
        }
    }

    const checkForSymbol = () => {
        if (gameboard.turn % 2 === 0) {
            gameboard.turn++
            return "X"
        }   else {
            gameboard.turn++
            return "O"
        }
    }

    const insertInputIntoArrayOfValues = (index, symbol) => {
        if (gameboard.gameboardValues[index] === "") {
            gameboard.gameboardValues[index] = symbol
    }
        updateGameboard()
        checkForWinner()
        checkForTie()
    }

    const checkForWinner = () => {
        if (gameboard.gameboardValues[0] === "X" && gameboard.gameboardValues[3] === "X" && gameboard.gameboardValues[6] === "X") {
            //playerOne wins! display resetButton
    }   else if (gameboard.gameboardValues[1] === "X" && gameboard.gameboardValues[4] === "X" && gameboard.gameboardValues[7] === "X") {
            //playerOne wins! display resetButton
    }   else if (gameboard.gameboardValues[2] === "X" && gameboard.gameboardValues[5] === "X" && gameboard.gameboardValues[8] === "X") {
            //playerOne wins! display resetButton
    }   else if (gameboard.gameboardValues[0] === "X" && gameboard.gameboardValues[1] === "X" && gameboard.gameboardValues[2] === "X") {
            console.log("retard")
    }   else if (gameboard.gameboardValues[3] === "X" && gameboard.gameboardValues[4] === "X" && gameboard.gameboardValues[5] === "X") {
        //playerOne wins! display resetButton
    }   else if (gameboard.gameboardValues[6] === "X" && gameboard.gameboardValues[7] === "X" && gameboard.gameboardValues[8] === "X") {
        //playerOne wins! display resetButton
    }   else if (gameboard.gameboardValues[0] === "X" && gameboard.gameboardValues[4] === "X" && gameboard.gameboardValues[8] === "X") {
        //playerOne wins! display resetButton
    }   else if (gameboard.gameboardValues[2] === "X" && gameboard.gameboardValues[4] === "X" && gameboard.gameboardValues[6] === "X") {
        //playerOne wins! display resetButton
    }   else if (gameboard.gameboardValues[1] === "O" && gameboard.gameboardValues[4] === "O" && gameboard.gameboardValues[7] === "O") {
            //playerTwo wins! display resetButton
    }   else if (gameboard.gameboardValues[2] === "O" && gameboard.gameboardValues[5] === "O" && gameboard.gameboardValues[8] === "O") {
            //playerTwo wins! display resetButton
    }   else if (gameboard.gameboardValues[0] === "O" && gameboard.gameboardValues[1] === "O" && gameboard.gameboardValues[2] === "O") {
            //playerTwo wins! display resetButton
    }   else if (gameboard.gameboardValues[3] === "O" && gameboard.gameboardValues[4] === "O" && gameboard.gameboardValues[5] === "O") {
            //playerTwo wins! display resetButton
    }   else if (gameboard.gameboardValues[6] === "O" && gameboard.gameboardValues[7] === "O" && gameboard.gameboardValues[8] === "O") {
            //playerTwo wins! display resetButton
    }   else if (gameboard.gameboardValues[0] === "O" && gameboard.gameboardValues[4] === "O" && gameboard.gameboardValues[8] === "O") {
            //playerTwo wins! display resetButton
    }   else if (gameboard.gameboardValues[2] === "O" && gameboard.gameboardValues[4] === "O" && gameboard.gameboardValues[6] === "O") {
            //playerTwo wins! display resetButton
    }   else if (gameboard.gameboardValues[0] === "O" && gameboard.gameboardValues[3] === "O" && gameboard.gameboardValues[6] === "O") {
            //playerTwo wins! display resetButton
    }   
}

    

    return {
        insertInputIntoArrayOfValues,
        checkForSymbol,
    }

})()


gameboard.gameboardCells[0].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(0, ControlGameboard.checkForSymbol()))
gameboard.gameboardCells[1].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(1, ControlGameboard.checkForSymbol()))
gameboard.gameboardCells[2].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(2, ControlGameboard.checkForSymbol()))
gameboard.gameboardCells[3].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(3, ControlGameboard.checkForSymbol()))
gameboard.gameboardCells[4].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(4, ControlGameboard.checkForSymbol()))
gameboard.gameboardCells[5].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(5, ControlGameboard.checkForSymbol()))
gameboard.gameboardCells[6].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(6, ControlGameboard.checkForSymbol()))
gameboard.gameboardCells[7].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(7, ControlGameboard.checkForSymbol()))
gameboard.gameboardCells[8].addEventListener("click", () => ControlGameboard.insertInputIntoArrayOfValues(8, ControlGameboard.checkForSymbol()))