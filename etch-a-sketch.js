// Generate the default 36x36 grid on page load
let originalSliderValue = document.querySelector(".slider").value;
const sketchPad = document.querySelector(".sketchPad");
generateGrid(originalSliderValue);


// Create grid of div's based on sliderValue
function generateGrid(sliderValue) {
    // Delete existing grid
    removePixels(sketchPad);

    // Create div's for new grid based on slider value and update sketch pad to fit them
    addPixels(sketchPad, sliderValue);
}


// Remove every pixel from sketchPad
function removePixels(sketchPad) {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
}


// Add pixels to sketchPad according to sliderValue
function addPixels(sketchPad, sliderValue) {
    // Find grid size based on slider value
    let sliderValueSquared = sliderValue * sliderValue;

    // Add pixels to the sketch pad according to slider value
    for (let i = 0; i < sliderValueSquared; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        sketchPad.appendChild(pixel);
    }

    // Make sketch pad fit all pixels in a grid
    sketchPad.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`;

    return;
}