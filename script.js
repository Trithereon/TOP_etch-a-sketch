//Default size is 16 squares.

let numSquares = 16;
gridCreate(numSquares);

function gridCreate(numSquares){

    let gridContainer = document.getElementById("grid-container");
    
    if (gridContainer === null){
        const newGridContainer = document.createElement("div");
        newGridContainer.setAttribute('id', 'grid-container');
            //no need to modify grid-container styles, as per instructions.
            //newGridContainer.style.width = numSquares * numSquares + "px";
            //newGridContainer.style.height = numSquares * numSquares + "px";
        document.body.appendChild(newGridContainer);
        gridContainer = document.getElementById("grid-container");
    }

    for (let i = 1; i <= numSquares; i++){
        for (let i = 1; i <= numSquares; i++){
            const newGridItem = document.createElement("div");
            newGridItem.classList.add("grid-item");
            newGridItem.style.width = 640 / numSquares - 2 + "px";
            newGridItem.style.height = 640 / numSquares - 2 + "px";
            gridContainer.appendChild(newGridItem);
        }
    }
    const gridItems = document.getElementsByClassName("grid-item");
    
    for (let i = 0; i < gridItems.length; i++){
        gridItems[i].addEventListener("mouseover", function() {
                gridItems[i].style.backgroundColor = 'black';
        });
}

}

numSquares = gridCreateButton.addEventListener("click", function(){
    numSquares = prompt("How many boxes per side do you want for the next grid? (1-100)");
    let grid = document.getElementById("grid-container");
    grid.remove();
    gridCreate(numSquares);
});