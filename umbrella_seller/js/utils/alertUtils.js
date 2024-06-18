// Utility functions related to alert handling

// Function to display alert messages
function showAlert(message) {
  const uploadError = document.getElementById("upload-error");
  uploadError.innerText = message;
  uploadError.classList.remove("hidden");
  setTimeout(() => {
    uploadError.classList.add("hidden");
  }, config.uploadErrorDisplayDuration);
}
