const form = document.querySelector("form.login-form");
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();

  if (!emailInput.value || !passwordInput.value) {
    alert("Please fill all inputs");
    return;
  }

  const formInput = event.currentTarget.elements;
  const email = formInput.email.value;
  const password = formInput.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
}
