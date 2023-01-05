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

function createBoxes(amount) {
  box.textContent = "";

  for (let i = 0; i < amount; i++) {
    box.insertAdjacentHTML("beforeend", `<div class="box-item"></div>`);
  }

  let boxItems = box.querySelectorAll(".box-item");

  boxItems.forEach((item) => {
    item.style.backgroundColor = getRandomHexColor();
  });

  const arr = [...boxItems];
  let size = 0;
  for (let i = 1; i < arr.length; i++) {
    size += 10;
    let widthActual = arr[i].offsetWidth + size;
    arr[i].style.width = `${widthActual}px`;
    arr[i].style.height = `${widthActual}px`;
  }
}

function removeBoxes() {
  box.textContent = "";
  numberInput.value = "";
}
