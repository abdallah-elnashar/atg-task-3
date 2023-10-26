const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");
const icon = document.getElementById("icon");

// Add hover event listener
inputField.addEventListener("mouseover", function () {
  inputField.classList.add("hover");
});

// Add focus event listener
inputField.addEventListener("focus", function () {
  inputField.classList.add("focused");
});

inputField.addEventListener("blur", function () {
  inputField.classList.remove("focused");
  inputField.classList.remove("typing");
});

// Add input event listener to detect typing
inputField.addEventListener("input", function () {
  inputField.classList.add("typing");
});

submitButton.addEventListener("click", function () {
  // Change button state to "loading" and disable it for 2 seconds.
  submitButton.classList.add("loading");
  submitButton.disabled = true;

  setTimeout(function () {
    // Revert the button state to "default" after 2 seconds.
    submitButton.classList.remove("loading");
    submitButton.disabled = false;
  }, 2000);
});

submitButton.addEventListener("click", function () {
  submitButton.classList.add("loading");
  submitButton.disabled = true;

  icon.classList.remove("fa-search");
  icon.classList.add("fa-spinner", "fa-spin");

  submitButton.style.backgroundColor = "gray";
  // Clear the input field
  inputField.value = "";

  // Set a timeout to revert the button state and icon after 2 seconds.
  setTimeout(function () {
    submitButton.classList.remove("loading");
    submitButton.disabled = false;
    icon.classList.remove("fa-spinner", "fa-spin");
    icon.classList.add("fa-search");
    submitButton.style.backgroundColor = "";
  }, 2000);
});
