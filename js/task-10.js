const refs = {
  boxesEl: document.getElementById("boxes"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-create]"),
  inputEl: document.querySelector("#controls input"),
};

let size = 30;
const fragmentEl = document.createDocumentFragment();

refs.createBtnEl.addEventListener("click", onBtnCreate);
refs.destroyBtnEl.addEventListener("click", onBtnDestroy);

function onBtnCreate() {
  createBoxes(refs.inputEl.valueAsNumber);
}

function onBtnDestroy() {
  refs.boxesEl.remove();
}

function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    const divEl = document.createElement("div");
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    fragmentEl.append(divEl);
    size += 10;
    console.log(divEl);
  }
  console.dir(fragmentEl);
  refs.boxesEl.appendChild(fragmentEl);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
