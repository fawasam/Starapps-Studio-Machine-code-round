// Utility functions related to file handling

// Function to validate file type and size
function validateFile(file) {
  if (!config.allowedFileTypes.includes(file.type)) {
    showAlert("Invalid file type. Only .png and .jpg files are allowed.");
    return false;
  }
  if (file.size > config.maxFileSizeMB * 1024 * 1024) {
    showAlert("File is too large. Maximum file size is 5MB.");
    return false;
  }
  return true;
}

// Function to shorten filename
function shortenFilename(filename) {
  const extension = filename.split(".").pop();
  const name = filename.substring(0, filename.length - extension.length - 1);
  const shortenedName = name.length > 15 ? name.substring(0, 15) + "..." : name;
  return `${shortenedName}.${extension}`;
}
