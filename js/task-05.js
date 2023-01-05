const textInput = document.querySelector("input#name-input");
const outputLine = document.querySelector("span#name-output");
textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value == 0) {
    outputLine.textContent = "Anonymous";
  } else {
    outputLine.textContent = event.currentTarget.value;
  }
});
