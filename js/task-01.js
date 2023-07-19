const ulEl = document.getElementById("categories");

console.log("Number of categories:", ulEl.childElementCount);

[...ulEl.children].forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelector("ul").childElementCount);
});
