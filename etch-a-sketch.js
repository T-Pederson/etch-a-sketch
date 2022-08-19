// Generate the default 36x36 grid on page load
let originalSliderValue = document.querySelector(".slider").value;
const sketchPad = document.querySelector(".sketchPad");
generateGrid(originalSliderValue);


// Enable ability to draw only if mouse is held down
document.querySelector("html").addEventListener("mousedown", drawModeOn);
document.querySelector("html").addEventListener("mouseup", drawModeOff);


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


// Add color to pixel based on what option is selected
function draw(pixel) {
    // If draw is selected, turn pixels black
    pixel.target.style.background = "black";

    // Else if erase is selected, turn pixels white
    // pixel.target.style.background = "white";
}


// Turn on drawing ability when mouse click is held down
function drawModeOn() {
    const pixels = document.querySelectorAll(".pixel");
    for (pixel of pixels) {
        pixel.addEventListener("mousemove", draw);
    }
}


// Turn off drawing ability when mouse click is released
function drawModeOff() {
    const pixels = document.querySelectorAll(".pixel");
    for (pixel of pixels) {
        pixel.removeEventListener("mousemove", draw);
    }
}