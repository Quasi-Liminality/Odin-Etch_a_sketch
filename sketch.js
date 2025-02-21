let container = document.querySelector('.container');

let gridDimensions = 16;
createGrid(gridDimensions);

function createGrid(dimensions) {
    container.innerHTML = '';
    container.style.setProperty('--container-children', dimensions);
    for (let i = 0; i < dimensions ** 2; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
    }
}

document.querySelector('#resizeBtn').addEventListener('click', () => {
    let newDimensions = (() => {
        let dimensions;
        do {
            dimensions = prompt('How many rows/columns should the grid have (1-100)?');
        } while (!parseInt(dimensions) || dimensions < 1 || dimensions > 100);
        return dimensions;
    })();
    createGrid(newDimensions);
});

container.addEventListener('mousemove', (e) => {
    e.target.style.backgroundColor = 'red';
});