function gridCreate(){

    const gridContainer = document.getElementById("grid-container");
    
    for (let i = 1; i <= 256; i++){
        const newGridItem = document.createElement("div");
        newGridItem.classList.add("grid-item");
        gridContainer.appendChild(newGridItem);
    }

    const gridItems = document.getElementsByClassName("grid-item");
    
    for (let i = 0; i < gridItems.length; i++){
        gridItems[i].addEventListener("mouseover", function() {
                gridItems[i].style.backgroundColor = 'black';
        });
    }

}

gridCreate();
