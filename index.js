let container = document.getElementById("container")
let sizeBtn = document.getElementById("sizeBtn")

resetBtn = document.getElementById("resetBtn")

resetBtn.addEventListener('click', () => {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
            item.style.backgroundColor = "";
    });
});

let size;
sizeBtn.addEventListener('click', () => {
    size = prompt("Enter the size for the grid.")

    clearGrid();

    changeSize(size);
});

let changeSize = (size) => {
    container.style.setProperty('--grid-size', size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add("grid-item");
        container.appendChild(div);
    }

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "black";
        });
    });
}

let clearGrid = () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}



changeSize(16)