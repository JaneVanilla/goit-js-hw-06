const list = document.querySelector("ul#categories");
const allItems = list.querySelectorAll("li.item");
console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((item) => {
  let titleText = item.firstElementChild.textContent;
  let innerItemsLength = item.lastElementChild.length;
  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${innerItemsLength}`);
});
