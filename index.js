let container = document.getElementById("container")

for (let row = 0; row < 16; row++){ // for loop to create 16x16 grid
    for (let col = 0; col < 16; col++){
        const div = document.createElement('div');
        div.classList.add("grid-item");
        container.appendChild(div);
    }
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "black";
    });
});