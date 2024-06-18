// Handles color changing logic

function changeColor(color, elements, colorSwatches) {
  if (color === elements.previousColor) return;

  elements.previousColor = color;
  updateUploadLabelColor(color, elements);
  elements.loader.style.fill =
    config.colors[color]?.main || config.colors[config.defaultColor].main;

  toggleLoader(true, elements);
  setTimeout(() => {
    updateUmbrellaImage(color, elements);
    updateTheme(color, elements);
    toggleLoader(false, elements);
    updateSelectedSwatch(color, colorSwatches);
  }, config.colorChangeDelay);
}

// Function to update the theme color
function updateTheme(color, elements) {
  elements.body.className = color;
  elements.body.style.backgroundColor =
    config.colors[color]?.background ||
    config.colors[config.defaultColor].background;
}
