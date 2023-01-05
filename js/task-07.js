const fontSizeController = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

fontSizeController.addEventListener("input", (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
});
