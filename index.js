const gameBoxes = document.querySelectorAll(".gameBox");
const gameoverElement = document.getElementById("gameover");
const messageElement = document.getElementById("message");

let emptySquare = [1,2,3,4,5,6,7,8,9];
let totalChances = 9;

let userOneScore = 0;
let markByUserOne = [];

let userTwoScore = 0;
let markByUserTwo = [];

let gameOver = false;

const markOnTheSquare = (markableBox, mark) => {
    if(mark == "cross") {
        markableBox.classList.add("active-cross");
    } else {
        markableBox.classList.add("active-nought");
    }
}
const removeEmptySquare = (removableBoxId) => {
    let newEmptySquare = emptySquare.filter(square => square != Number(removableBoxId));
    emptySquare = newEmptySquare;
}

gameBoxes.forEach((gameBox) => {
    gameBox.addEventListener("click", () => {
        markByUser(gameBox);
        setTimeout(() => {
            compGenerateMark();
        }, 500)
    })
})

const markByUser = (gameBox) => {
    if(totalChances == 0 || gameOver == true) return

    markOnTheSquare(gameBox, "cross") //TODO: need to chnage the constant value "cross"
    let boxId = gameBox.getAttribute("id");
    markByUserOne.push(boxId);
    removeEmptySquare(boxId);
    totalChances -= 1;
}

const compGenerateMark = () => {
    if(totalChances == 0 || gameOver == true) return

    const randomNumber = Math.floor(Math.random() * emptySquare.length);
    const squareNumber = emptySquare[randomNumber];
    //* Mark the square
    const gameBox = document.getElementById(`${squareNumber}`);
    markOnTheSquare(gameBox, "nought") //TODO: need to chnage the constant value "cross"
    markByUserTwo.push(squareNumber);
    removeEmptySquare(squareNumber);
    totalChances -= 1;
}