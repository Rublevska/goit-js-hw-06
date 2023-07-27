const inputEl = document.getElementById("validation-input");
const validLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  if (event.target.value.length == validLength) {
    inputEl.classList.add("valid");
    inputEl.classList.toggle("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.toggle("valid");
  }
}
