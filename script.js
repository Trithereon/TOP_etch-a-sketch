//Default size is 16 squares.

let numSquares = 16;
gridCreate(numSquares);

function gridCreate(numSquares){

    let gridContainer = document.getElementById('grid-container');
    
    // once grid container is removed, build a new one.
    if (gridContainer === null){
        const newGridContainer = document.createElement('div');
        newGridContainer.setAttribute('id', 'grid-container');
            /* No need to modify grid-container styles, as per instructions. 
            Grid container size should remain constant.
            If we wanted the grid item size to remain constant, we could make the grid container size vary like so:
            newGridContainer.style.width = numSquares * numSquares + "px";
            newGridContainer.style.height = numSquares * numSquares + "px"; */
        document.body.appendChild(newGridContainer);
        gridContainer = document.getElementById('grid-container');
    }

    // fill grid container with grid items by appending each one by one. Surely this can be optimized, since appendChild() triggers a reflow and repaint of the DOM.
    /*for (let i = 1; i <= numSquares*numSquares; i++){
        const newGridItem = document.createElement("div");
        newGridItem.classList.add("grid-item");
        newGridItem.style.width = 640 / numSquares - 2 + "px"; //subtracting 2 because grid-item border is 1px on each side.
        newGridItem.style.height = 640 / numSquares - 2 + "px";
        gridContainer.appendChild(newGridItem);
    }*/

    // the following is an attempt to optimize the appendChild() method, for fewer reflows and repaints.
    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= numSquares*numSquares; i++){
        const newGridItem = document.createElement('div');
        newGridItem.classList.add('grid-item');
        newGridItem.style.width = 640 / numSquares - 2 + 'px'; // subtracting 2 because grid-item border is 1px on each side.
        newGridItem.style.height = 640 / numSquares - 2 + 'px';
        fragment.appendChild(newGridItem);
    }

    document.getElementById('grid-container').appendChild(fragment);

    // note: at numSquares=300, the fragment method is 1 second faster, or 3s instead of 4s.


    const gridItems = document.querySelectorAll('.grid-item');
    // hovering over a square blackens it by 10%
    gridItems.forEach(item => {
        let opacity = 0; 
        let mouseoverCount = 0; 
        let red = Math.floor(Math.random() * 256); // converts the Math.random() float value to an integer between 0-255 for rgb
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = `rgb(${red},${green},${blue})`; // assign a random color to item
            if (mouseoverCount < 10) {
                opacity += 0.1;  // increase opacity by 10%
                mouseoverCount++;

                if (opacity > 1) {
                    opacity = 1;  // limit opacity to 1 (fully opaque)
                }

                // apply the new opacity to the grid item
                item.style.opacity = opacity;
            }
        });
    });

}

    // clicking the button prompts the user for input on the new grid resolution (numSquares value)
numSquares = gridCreateButton.addEventListener('click', function(){
    const grid = document.getElementById('grid-container');
    grid.remove();
    numSquares = prompt('How many boxes per side do you want for the next grid? (1-100)');
    
    while (numSquares < 1 || numSquares > 100 || isNaN(numSquares)){
        numSquares = prompt('INVALID INPUT! Please choose an integer between 1-100.');
    }

    gridCreate(numSquares);
});