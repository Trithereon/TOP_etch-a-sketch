function gridCreate(){

    const gridContainer = document.getElementById("grid-container");
    
    
    for (let i = 1; i <= 16; i++){
        for (let i = 1; i <= 16; i++){
            const newGridItem = document.createElement("div");
            newGridItem.classList.add("grid-item");
            gridContainer.appendChild(newGridItem);
        }
        
        /*const lineBreak = document.createElement('br');
        gridContainer.appendChild(lineBreak);*/
    }

}

gridCreate();
