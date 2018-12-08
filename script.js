// create 16x16 square grid
gridContainer = document.querySelector(".grid-container");
for (let i = 0; i < 16*16; i++) {
    let div = document.createElement("div");
    gridContainer.appendChild(div);
}

// change square's color with mouseover
squares = document.querySelectorAll(".grid-container > div");
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});

// clear the grid so it is white if you press the button
clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});

// let user change how many squares appear on each side
sizeButton = document.querySelector(".size");
sizeButton.addEventListener("click", () => {
    // user inputs number of squares
    let newSize = prompt("How many squares on each side?",'');

    // stop if press cancel
    if (newSize === null) {
        return;
    }

    newSize = parseInt(newSize);
    while (!(Number.isInteger(newSize) && newSize > 0)) {
        newSize = prompt("Please enter a positive integer. How many squares on each side?",'');
        if (newSize === null) {
            return;
        }
        newSize = parseInt(newSize);
    }
 
    // remove squares and then add new ones
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for (let i = 0; i < newSize*newSize; i++) {
        let div = document.createElement("div");
        gridContainer.appendChild(div);
    }
    gridContainer.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;

    squares = document.querySelectorAll(".grid-container > div");
    squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});

});