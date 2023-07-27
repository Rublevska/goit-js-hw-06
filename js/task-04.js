const valueEl = document.getElementById("value");
let counterValue = 0;

const actionsBtn = document.querySelectorAll("#counter button");
for (const btn of actionsBtn) {
  if (btn.dataset.action === "decrement") {
    btn.addEventListener("click", onBtnDecClick);
  } else {
    btn.addEventListener("click", onBtnIncClick);
  }
}

function onBtnDecClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onBtnIncClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
