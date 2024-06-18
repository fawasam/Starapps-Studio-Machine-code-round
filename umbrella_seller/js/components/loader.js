// Handles loader visibility and states

function toggleLoader(show, elements) {
  if (show) {
    elements.loader.classList.remove("hidden");
    elements.uploadLoader.classList.remove("hidden");
    elements.umbrellaImage.classList.remove("visible");
    elements.logoImage.classList.add("hidden");
    elements.uploadIcon.classList.add("hidden");
  } else {
    elements.loader.classList.add("hidden");
    elements.uploadIcon.classList.remove("hidden");
    elements.uploadLoader.classList.add("hidden");
    elements.umbrellaImage.classList.add("visible");
    elements.logoImage.classList.remove("hidden");
  }
}
