const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email.trim() == "" || password.trim() == "") {
    alert("Всі поля форми мають бути заповнені");
    return;
  }

  const formData = new FormData(event.target);
  const loginData = {};
  formData.forEach((value, key) => (loginData[key] = value));

  console.log(loginData);
  event.target.reset();
}
