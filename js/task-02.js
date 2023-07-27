const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const fragmentEl = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  fragmentEl.append(liEl);
}

const ulEl = document.getElementById("ingredients");
ulEl.append(fragmentEl);
