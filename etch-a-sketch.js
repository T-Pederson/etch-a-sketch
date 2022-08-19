// Generate the default 16x16 grid on page load
let sliderValue = document.querySelector(".slider").value;
generateGrid(sliderValue);

// Add event listener to slider to update the grid size when slider changes
document.querySelector(".slider").addEventListener("change", generateGrid);


// Create grid of div's based on sliderValue
function generateGrid(size) {
    // Delete existing grid

    // Create div's for new grid based on slider value

}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}