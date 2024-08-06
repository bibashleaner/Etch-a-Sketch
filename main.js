/**
 * @type{HTMLElement}
 */


const resetBtn = document.querySelector('#reset');
const container = document.querySelector('.container');

//Creating div using js and putting grid squares inside the container

function populateContainer(size){
    const squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i=0; i<amount; i++){
        const square = document.createElement("div");
        square.classList.add("cell");
        container.style.backgroundColor = "#e0e0e0";
        // implementing mouseover using js
        square.addEventListener("mouseover", colorSquare);
        container.insertAdjacentElement("beforeend", square);
    }
}
// webpage grid of 16x16
populateContainer(16);

// Function for mouseover

function colorSquare() {
    this.style.backgroundColor = "black";
}
square.onmouseover = colorSquare;

// Function to reset(to erase all the hovers)

function resetContainer(){
    const squares = container.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
}

// Function to input how many grid

function changeSize(){
    let inputSize = prompt("Input grid size(1-100)");
    if(inputSize >= 1 && inputSize <= 100){
        populateContainer(inputSize);
    }
    else{
        alert("input error! to many or to few squares");
    }
}