// Create a border width and height to container all other divs
function createGrid() {
    const container = document.querySelector("#container");
    container.setAttribute("style", "display: grid; grid-template-columns: repeat(16, 3vw); justify-items: center; margin: auto; width: 50%");
}



// create one line of div grids
function createRowOfDivs() {
    const div = document.createElement('div');
    container.appendChild(div);
    div.setAttribute("style", "border: 1px black solid; width: 3vw; height: 3vh");
    div.addEventListener('mouseover', () => {
        //div.style.backgroundColor = "red";
        div.style.backgroundColor = getRandomColor();
    })
}

// Create a 16x16 grid made of divs
// let height = 16;
function createDivs (height) {
    for (i = 0; i < height; i++) {
        for (j = height - 1; j > i; j--) {
            // insert box
            createRowOfDivs();
        }

        for (k = -1; k < i; k++) {
            // insert box
            createRowOfDivs();
        }
    }
    
    changeSize(createButton());
}

// Get a random color
function getRandomColor () {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// create button to reset and choose size
let size;
let height = 16;
function createButton () {
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        do {
            height = prompt("What size would you like the grid?");
        } while (!(height <= 100 && height >= 1));
    })
}

// change size of grid
function changeSize (size) {
    height = 16;
    if (size > 0) {
        height = size;
    }
    return height;
}

// Invoke functions
createGrid();
createDivs(height);

/*
Set height and width of container div. 
divs inside container should stretch to fit the container.
This should solve any resizing issues.

Then figure out the changing sizes.
*/