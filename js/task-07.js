const refs = {
  rangeEl: document.getElementById("font-size-control"),
  textEl: document.getElementById("text"),
};

refs.rangeEl.addEventListener("input", onRangeInput);

function onRangeInput(event) {
  const value = event.target.value;
  refs.textEl.style.fontSize = value + "px";
}
