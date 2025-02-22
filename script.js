function gridCreate(){
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    const gridContainer = document.getElementById("grid-container");
    gridContainer.appendChild(newGridItem);

}

gridCreate();
