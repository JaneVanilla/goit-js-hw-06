function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const pageBody = document.body;
const colorLine = document.querySelector("span.color");
const button = document.querySelector("button.change-color");

button.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  let color = getRandomHexColor();
  colorLine.textContent = color;
  pageBody.style.backgroundColor = color;
}
