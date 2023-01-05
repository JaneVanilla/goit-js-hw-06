const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let value = document.querySelector("#value");
let counterValue = 0;

const decrementValue = () => {
  if (counterValue == 0) {
    value.textContent = 0;
  } else {
    counterValue--;
    value.textContent = counterValue;
  }
};

const incrementValue = () => {
  counterValue++;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);
