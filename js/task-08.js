const form = document.querySelector("form.login-form");
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();

  if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
    alert("Please fill all inputs");
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
