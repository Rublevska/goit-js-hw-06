const refs = {
  inputEl: document.getElementById("name-input"),
  outputEl: document.getElementById("name-output"),
};

refs.inputEl.addEventListener("input", onInputElInput);

function onInputElInput(event) {
  const nameValue = event.target.value;
  refs.outputEl.textContent = nameValue.trim() === "" ? "Anonymous" : nameValue;
}
