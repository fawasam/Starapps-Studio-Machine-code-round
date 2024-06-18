// Utility functions related to DOM manipulation

// Function to update the umbrella image
function updateUmbrellaImage(color, elements) {
  elements.umbrellaImage.src = `assets/images/${color}-umbrella.png`;
  elements.umbrellaImage.onload = () => {
    elements.umbrellaImage.classList.add("visible");
  };
}

// Function to update the upload button color
function updateUploadLabelColor(color, elements) {
  elements.uploadButton.style.backgroundColor =
    config.colors[color]?.main || config.colors[config.defaultColor].main;
}

// Function to update the selected color swatch
function updateSelectedSwatch(color, colorSwatches) {
  colorSwatches.forEach((swatch) => {
    swatch.classList.remove("selected");
    if (swatch.dataset.color === color) {
      swatch.classList.add("selected");
    }
  });
}
