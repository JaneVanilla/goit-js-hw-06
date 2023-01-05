const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

ingredients.forEach((ingredient) => {
  let li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  list.append(li);
});
