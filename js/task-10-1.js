const refs = {
  boxes: document.getElementById("boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls input"),
};

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = function (amount) {
  var html = "";
  var size = 30;
  for (var i = 0; i < amount; i++) {
    html +=
      '<div style="width:' +
      (size + i * 10) +
      "px;height:" +
      (size + i * 10) +
      "px;background-color:" +
      getRandomHexColor() +
      '"></div>';
  }
  return html;
};

const setNewHtml = function (block, amount) {
  block.innerHTML = createBoxes(amount);
};

refs.createBtn.addEventListener("click", function () {
  setNewHtml(refs.boxes, refs.input.value);
});
refs.destroyBtn.addEventListener("click", function () {
  setNewHtml(refs.boxes, 0);
});
