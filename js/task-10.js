function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const box = document.querySelector("div#boxes");
let numberInput = document.querySelector('input[type="number"]');

createBtn.addEventListener("click", () => {
  let numberInInput = +numberInput.value;
  if (numberInInput > 100) {
    alert("Max number is 100");
    numberInput.value = "";
    return;
  }
  if (numberInInput < 1) {
    alert("Min number is 1");
    numberInput.value = "";
    return;
  }

  createBoxes(numberInInput);
});

destroyBtn.addEventListener("click", removeBoxes);

const allItems = [];

function createBoxes(amount) {
  box.textContent = "";
  allItems.length = 0;
  let itemSize = 30;
  for (let i = 0; i < amount; i++) {
    allItems.push(
      `<div class="box-item" style="width:${itemSize}px; height:${itemSize}px; background-color:${getRandomHexColor()}"></div>`
    );
    itemSize += 10;
  }

  box.insertAdjacentHTML("beforeend", allItems.join(""));
}

function removeBoxes() {
  box.textContent = "";
  numberInput.value = "";
  allItems.length = 0;
}
