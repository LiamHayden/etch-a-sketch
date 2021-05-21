// Create a border width and height to container all other divs
const container = document.querySelector("#container");
container.setAttribute("style", "border: 1px black solid; width: 50vw; height: 50vh");
container.setAttribute("style", "display: flex; justify-content: center;")

// create one div
const Div = document.createElement('div');
container.appendChild(Div);
Div.setAttribute("style", "border: 1px black solid; width: 5vw; height: 5vh");

const div = document.createElement('div');
        container.appendChild(div);
for (i = 0; i < 16; i++) {
    for (k = 0; k < 16; k++) {
        div.setAttribute("style", "border: 1px black solid; width: 5vw; height: 5vh");
    }
    div.setAttribute("style", "border: 1px black solid; width: 5vw; height: 5vh");
    const br = document.createElement('br');
        container.appendChild(br);
}



