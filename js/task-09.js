const refs = {
  btnEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
};

refs.btnEl.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  const color = getRandomHexColor();
  refs.spanEl.textContent = color;
  document.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
