const drawing = document.querySelector(".drawing");
const btnClear = document.querySelector(".clearGrid");
let changedSize = document.querySelector("#gridsize");
changedSize.addEventListener("change", function () {
    loadGrid(this.value);
});

window.addEventListener("load", loadGrid(changedSize.value));
btnClear.addEventListener("click", clearGrid);

function loadGrid(size) {
    setGridSize(size);
    createGrid(size);
}

function setGridSize(size) {
    removePixels();
    drawing.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.className = "pixel";
        div.addEventListener("mouseover", changeColor);
        drawing.appendChild(div);
    }
}

function changeColor(e) {
    let red = Math.floor(Math.random() * (256 - 100) + 100);
    let blue = Math.floor(Math.random() * (256 - 100) + 100);
    let green = Math.floor(Math.random() * (256 - 100) + 100);
    e.target.style.backgroundColor = `rgb(${red},${blue},${green})`;
}

function clearGrid() {
    let pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = `white`;
    }
}

function removePixels() {
    let pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i++) {
        drawing.removeChild(pixel[i]);
    }
}


