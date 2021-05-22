// Create a border width and height to container all other divs
const container = document.querySelector("#container");
container.setAttribute("style", "display: grid; grid-template-columns: repeat(16, 2vw); justify-items: center;")


// create one line of div grids
function createRowOfDivs() {
    const div = document.createElement('div');
    container.appendChild(div);
    div.setAttribute("style", "border: 1px black solid; width: 2vw; height: 2vh");
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "red";
    })
}

// Create a 16x16 grid made of divs
let height = 16;
function createDivs () {
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



createDivs();

