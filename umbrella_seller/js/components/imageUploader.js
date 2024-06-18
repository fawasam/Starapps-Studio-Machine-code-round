// Handles image upload logic

function handleLogoUpload(event, elements) {
  const file = event.target.files[0];
  const fileInput = event.target;
  if (!validateFile(file)) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    // fileInput.disabled = true;
    setUploadLoading(true, elements);
    setTimeout(() => {
      elements.logoImage.src = e.target.result;
      elements.logoImage.classList.remove("hidden");
      elements.uploadButton.textContent = shortenFilename(file.name);
      elements.removeIcon.classList.remove("hidden");
      setUploadLoading(false, elements);
    }, config.uploadLoadDelay);
  };
  reader.readAsDataURL(file);
}

// Function to set the upload loading state
function setUploadLoading(isLoading, elements) {
  if (isLoading) {
    elements.uploadIcon.classList.add("hidden");
    elements.uploadLoader.classList.remove("hidden");
    elements.umbrellaImage.classList.remove("visible");
    elements.loader.classList.remove("hidden");
  } else {
    elements.uploadLoader.classList.add("hidden");
    elements.umbrellaImage.classList.add("visible");
    elements.uploadIcon.classList.remove("hidden");
    elements.loader.classList.add("hidden");
  }
}
