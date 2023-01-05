const list = document.querySelector("ul#categories");
const allItems = list.querySelectorAll("li.item");
console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((item) => {
  let titleText = item.querySelector("h2").textContent;
  let innerItemsLength = item.querySelectorAll("li").length;
  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${innerItemsLength}`);
});
