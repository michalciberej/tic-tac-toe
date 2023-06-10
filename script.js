const cellZero = document.querySelector("#cellZero")
const cellOne = document.querySelector("#cellOne")
const cellTwo = document.querySelector("#cellTwo")
const cellThree = document.querySelector("#cellThree")
const cellFour = document.querySelector("#cellFour")
const cellFive = document.querySelector("#cellFive")
const cellSix = document.querySelector("#cellSix")
const cellSeven = document.querySelector("#cellSeven")
const cellEight = document.querySelector("#cellEight")
const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")

const gameboard = {
    gameboardCells: [cellZero, cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight],
    gameboardValues: ["","","","","","","","",""],
    turn: 0,
}

const ControlGameboard = (() => {

    const resetBtn = document.querySelector("#resetBtn")

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

    const makeCellsNotScale = (index) => {
        if (gameboard.gameboardCells[index].textContent === "X" || gameboard.gameboardCells[index].textContent === "O"){
            gameboard.gameboardCells[index].classList.remove("gameCellActive")
        }
    }

    const insertInputIntoArrayOfValues = (index, symbol) => {
        if (gameboard.gameboardValues[index] === "") {
            gameboard.gameboardValues[index] = symbol
    }
        updateGameboard()
        makeCellsNotScale(index)
        checkForWinner()
        checkForTie()
    }

    const checkForWinner = () => {
        if (gameboard.gameboardValues[0] === "X" && gameboard.gameboardValues[3] === "X" && gameboard.gameboardValues[6] === "X") {
            gameboard.gameboardCells[0].classList.add("winnerX")
            gameboard.gameboardCells[3].classList.add("winnerX")
            gameboard.gameboardCells[6].classList.add("winnerX")
            controlUi.showModal()
            controlUi.showWinnerX()
    }   else if (gameboard.gameboardValues[1] === "X" && gameboard.gameboardValues[4] === "X" && gameboard.gameboardValues[7] === "X") {
            gameboard.gameboardCells[1].classList.add("winnerX")
            gameboard.gameboardCells[4].classList.add("winnerX")
            gameboard.gameboardCells[7].classList.add("winnerX")
            controlUi.showModal()
            controlUi.showWinnerX()
    }   else if (gameboard.gameboardValues[2] === "X" && gameboard.gameboardValues[5] === "X" && gameboard.gameboardValues[8] === "X") {
            gameboard.gameboardCells[2].classList.add("winnerX")
            gameboard.gameboardCells[5].classList.add("winnerX")
            gameboard.gameboardCells[8].classList.add("winnerX")
            controlUi.showModal()
            controlUi.showWinnerX()
    }   else if (gameboard.gameboardValues[0] === "X" && gameboard.gameboardValues[1] === "X" && gameboard.gameboardValues[2] === "X") {
            gameboard.gameboardCells[0].classList.add("winnerX")
            gameboard.gameboardCells[1].classList.add("winnerX")
            gameboard.gameboardCells[2].classList.add("winnerX")
            controlUi.showModal()
            controlUi.showWinnerX()
    }   else if (gameboard.gameboardValues[3] === "X" && gameboard.gameboardValues[4] === "X" && gameboard.gameboardValues[5] === "X") {
            gameboard.gameboardCells[3].classList.add("winnerX")
            gameboard.gameboardCells[4].classList.add("winnerX")
            gameboard.gameboardCells[5].classList.add("winnerX")
            controlUi.showModal()
            controlUi.showWinnerX()
    }   else if (gameboard.gameboardValues[6] === "X" && gameboard.gameboardValues[7] === "X" && gameboard.gameboardValues[8] === "X") {
            gameboard.gameboardCells[6].classList.add("winnerX")
            gameboard.gameboardCells[7].classList.add("winnerX")
            gameboard.gameboardCells[8].classList.add("winnerX")
            controlUi.showModal()
            controlUi.showWinnerX()
    }   else if (gameboard.gameboardValues[0] === "X" && gameboard.gameboardValues[4] === "X" && gameboard.gameboardValues[8] === "X") {
            gameboard.gameboardCells[0].classList.add("winnerX")
            gameboard.gameboardCells[4].classList.add("winnerX")
            gameboard.gameboardCells[8].classList.add("winnerX")
            controlUi.showModal()
            controlUi.showWinnerX()
    }   else if (gameboard.gameboardValues[2] === "X" && gameboard.gameboardValues[4] === "X" && gameboard.gameboardValues[6] === "X") {
            gameboard.gameboardCells[2].classList.add("winnerX")
            gameboard.gameboardCells[4].classList.add("winnerX")
            gameboard.gameboardCells[6].classList.add("winnerX")
            controlUi.showModal()
            controlUi.showWinnerX()
    }   else if (gameboard.gameboardValues[1] === "O" && gameboard.gameboardValues[4] === "O" && gameboard.gameboardValues[7] === "O") {
            gameboard.gameboardCells[1].classList.add("winnerO")
            gameboard.gameboardCells[4].classList.add("winnerO")
            gameboard.gameboardCells[7].classList.add("winnerO")
            controlUi.showModal()
            controlUi.showWinnerO()
    }   else if (gameboard.gameboardValues[2] === "O" && gameboard.gameboardValues[5] === "O" && gameboard.gameboardValues[8] === "O") {
            gameboard.gameboardCells[2].classList.add("winnerO")
            gameboard.gameboardCells[5].classList.add("winnerO")
            gameboard.gameboardCells[8].classList.add("winnerO")
            controlUi.showModal()
            controlUi.showWinnerO()
    }   else if (gameboard.gameboardValues[0] === "O" && gameboard.gameboardValues[1] === "O" && gameboard.gameboardValues[2] === "O") {
            gameboard.gameboardCells[0].classList.add("winnerO")
            gameboard.gameboardCells[1].classList.add("winnerO")
            gameboard.gameboardCells[2].classList.add("winnerO")
            controlUi.showModal()
            controlUi.showWinnerO()
    }   else if (gameboard.gameboardValues[3] === "O" && gameboard.gameboardValues[4] === "O" && gameboard.gameboardValues[5] === "O") {
            gameboard.gameboardCells[3].classList.add("winnerO")
            gameboard.gameboardCells[4].classList.add("winnerO")
            gameboard.gameboardCells[5].classList.add("winnerO")
            controlUi.showModal()
            controlUi.showWinnerO()
    }   else if (gameboard.gameboardValues[6] === "O" && gameboard.gameboardValues[7] === "O" && gameboard.gameboardValues[8] === "O") {
            gameboard.gameboardCells[6].classList.add("winnerO")
            gameboard.gameboardCells[7].classList.add("winnerO")
            gameboard.gameboardCells[8].classList.add("winnerO")
            controlUi.showModal()
            controlUi.showWinnerO()
    }   else if (gameboard.gameboardValues[0] === "O" && gameboard.gameboardValues[4] === "O" && gameboard.gameboardValues[8] === "O") {
            gameboard.gameboardCells[0].classList.add("winnerO")
            gameboard.gameboardCells[4].classList.add("winnerO")
            gameboard.gameboardCells[8].classList.add("winnerO")
            controlUi.showModal()
            controlUi.showWinnerO()
    }   else if (gameboard.gameboardValues[2] === "O" && gameboard.gameboardValues[4] === "O" && gameboard.gameboardValues[6] === "O") {
            gameboard.gameboardCells[2].classList.add("winnerO")
            gameboard.gameboardCells[4].classList.add("winnerO")
            gameboard.gameboardCells[6].classList.add("winnerO")
            controlUi.showModal()
            controlUi.showWinnerO()
    }   else if (gameboard.gameboardValues[0] === "O" && gameboard.gameboardValues[3] === "O" && gameboard.gameboardValues[6] === "O") {
            gameboard.gameboardCells[0].classList.add("winnerO")
            gameboard.gameboardCells[3].classList.add("winnerO")
            gameboard.gameboardCells[6].classList.add("winnerO")
            controlUi.showModal()
            controlUi.showWinnerO()
    }   else {
        return false
    }
}

    const checkForTie = () => {
        if (x() === true) {
            controlUi.modalSpanDraw.textContent = "draw!"
            controlUi.modalSpan.textContent = ""
            controlUi.showModal()
        } 
    }

    const x = () => {
        for (let j = 0; j < gameboard.gameboardValues.length; j++) {
            if (gameboard.gameboardValues[j] === "") {
                break
            }   else if (j === 8){
                return true
            }
            
        }
    }

    const resetGame = () => {
        controlUi.hideModal()
        modalSpan.textContent = ""
        for (let i = 0; i <= gameboard.gameboardCells.length; i++) {
            gameboard.gameboardCells[i].innerHTML = "";
            gameboard.gameboardCells[i].classList.remove("winnerX")
            gameboard.gameboardCells[i].classList.remove("winnerO")
            gameboard.gameboardValues[i] = "";
            controlUi.modalSpan.classList.remove("winnerX")
            controlUi.modalSpan.classList.remove("winnerO")
            controlUi.modalSpanDraw.textContent = ""
        }
        gameboard.turn = 0
    }

    resetBtn.addEventListener("click", () => resetGame())

    return {
        insertInputIntoArrayOfValues,
        checkForSymbol,
    }

})()

const controlUi = (() => {
    const modalSpan = document.querySelector("#modalSpan")
    const modalSpanDraw = document.querySelector("#modalSpanDraw") 

    const showModal = () => {
        modal.style.scale = 1
        overlay.style.scale = 1
    }

    const hideModal = () => {
        modal.style.scale = 0
        overlay.style.scale = 0
    }

    const showWinnerX = () => {
        modalSpan.classList.add("winnerX")
        modalSpan.textContent = "Player X"
        modalSpanDraw.textContent = " wins!"
    }

    const showWinnerO = () => {
        modalSpan.classList.add("winnerO")
        modalSpan.textContent = "Player O"
        modalSpanDraw.textContent = " wins!"
    }

    return {
        showModal,
        hideModal,
        showWinnerX,
        showWinnerO,
        modalSpan,
        modalSpanDraw,
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
