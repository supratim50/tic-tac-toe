const gameBoxes = document.querySelectorAll(".gameBox");
let emptySquare = [1,2,3,4,5,6,7,8,9];

const markOnTheSquare = (markableBox, mark) => {
    if(mark == "cross") {
        markableBox.classList.add("active-cross");
    } else {
        markableBox.classList.add("active-nought");
    }
}
const removeEmptySquare = (removableBox) => {
    let boxId = removableBox.getAttribute("id");
    let newEmptySquare = emptySquare.filter(square => square != Number(boxId));
    emptySquare = newEmptySquare;
}

gameBoxes.forEach((gameBox) => {
    gameBox.addEventListener("click", () => {
        markOnTheSquare(gameBox, "cross") //TODO: need to chnage the constant value "cross"
        removeEmptySquare(gameBox);
        setTimeout(() => {
            compGenerateMark();
        }, 500)
    })
})

const compGenerateMark = () => {
    const randomNumber = Math.floor(Math.random() * emptySquare.length);
    const squareNumber = emptySquare[randomNumber];

    //* Mark the square
    const gameBox = document.getElementById(`${squareNumber}`);
    markOnTheSquare(gameBox, "nought") //TODO: need to chnage the constant value "cross"
    removeEmptySquare(gameBox);
}