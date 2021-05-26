// Create a border width and height to container all other divs

function createGrid(height) {
    const container = document.querySelector("#container");
    container.setAttribute("style", 
    `margin: auto; display: grid; height: 90vh; align-content: center; 
    grid-template-columns: repeat(${height}, 3vw); justify-content: center;`);
    createDivs(height);
}

// create one line of div grids
function createRowOfDivs() {
    const div = document.createElement('div');
    container.appendChild(div);
    div.setAttribute("style", "border: 1px black solid; height: 3vh");
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = getRandomColor();
    })
}

// Create a 16x16 grid made of divs
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
let height = 16;
let newHeight;
function createButton () {
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        do {
            newHeight = prompt("What size would you like the grid?");
            container.innerHTML = "";
        } while (!(newHeight <= 100 && newHeight >= 1));
        //changeSize(newHeight);
        createGrid(newHeight);
    })
}

// Invoke functions
createGrid(height);
createButton();
