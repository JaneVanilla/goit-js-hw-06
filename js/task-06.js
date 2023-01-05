const textInput = document.querySelector('input[type="text"]');
const dataLength = +textInput.dataset.length;

const validationTextInput = () => {
  if (textInput.value.length === dataLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
};
textInput.addEventListener("blur", validationTextInput);
