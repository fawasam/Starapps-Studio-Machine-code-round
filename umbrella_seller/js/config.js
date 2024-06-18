// Function to get a CSS variable value
function getCssVariableValue(variableName) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

// Configuration for the application

const config = {
  colors: {
    Pink: {
      main: getCssVariableValue("--pink-color"),
      background: getCssVariableValue("--pink-bgColor"),
    },
    Blue: {
      main: getCssVariableValue("--blue-color"),
      background: getCssVariableValue("--blue-bgColor"),
    },
    Yellow: {
      main: getCssVariableValue("--yellow-color"),
      background: getCssVariableValue("--yellow-bgColor"),
    },
  },
  defaultColor: "Blue",
  maxFileSizeMB: 5,
  previousColor: null,
  colorCache: {},
  allowedFileTypes: ["image/png", "image/jpeg"],
  colorChangeDelay: 1000,
  uploadLoadDelay: 500,
  uploadErrorDisplayDuration: 3000,
};
