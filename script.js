const gridcontainer = document.querySelector("#grid-container");
let root = document.documentElement;

let dimension = 16;
root.style.setProperty('--row', (100/dimension) + "%");



for (let j = 0; j < dimension; j++){
    const row = document.createElement("div");
    for (let i = 0; i < dimension; i++){
        const singleCell = document.createElement("div");
        singleCell.style.backgroundColor = "grey";
        singleCell.classList.add ("green-text");
        singleCell.classList.add("cell");
        singleCell.textContent = ":)"
        singleCell.addEventListener('mouseover', () =>{
            singleCell.style.backgroundColor = "red";
        });
        row.appendChild(singleCell)
    }
    gridcontainer.appendChild(row)
}
