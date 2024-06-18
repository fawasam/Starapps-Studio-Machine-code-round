// Main initialization and app entry point

document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    umbrellaImage: document.getElementById("umbrella-image"),
    loader: document.getElementById("loader"),
    logoImage: document.getElementById("logo-image"),
    removeIcon: document.getElementById("remove_icon"),
    uploadButton: document.getElementById("logo-upload-button"),
    uploadError: document.getElementById("upload-error"),
    uploadIcon: document.getElementsByClassName("upload_icon")[0],
    uploadLoader: document.getElementById("upload-loader"),
    colorSwatches: document.querySelectorAll(".color-swatch"),
    label: document.querySelector("label[for='logo-upload']"),
    body: document.body,
  };

  console.log(elements.removeIcon);
  console.log(elements.uploadIcon);
  // Initialize the color changer with the default color
  changeColor(config.defaultColor, elements, elements.colorSwatches);

  // Attach event listeners
  elements.colorSwatches.forEach((swatch) => {
    swatch.addEventListener("click", () =>
      changeColor(swatch.dataset.color, elements, elements.colorSwatches)
    );
  });

  const fileInput = document.getElementById("logo-upload");
  fileInput.addEventListener("change", (event) => {
    handleLogoUpload(event, elements);
  });

  elements.removeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    const fileInput = e.target;
    console.log(fileInput);
    elements.logoImage.src = "";
    elements.logoImage.classList.add("hidden");
    fileInput.disabled = false;
    elements.uploadButton.textContent = "Upload Image";
    elements.removeIcon.classList.add("hidden");
  });
});
