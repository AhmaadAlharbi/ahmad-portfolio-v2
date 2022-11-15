const inputName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const warningText = document.getElementById("warningText");
const warningIcon = document.getElementById("warningIcon");
const form = document.querySelector("form");
const warning = document.querySelector(".warning");
let counterError = 0;

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//check if forms inputs empty or not

function required(inputtx) {
  inputtx.classList.remove("error-border");
  if (inputtx.value.length == 0) {
    inputtx.classList.add("error-border");
    warning.classList.remove("hidden");
    return false;
  }
  warning.classList.add("hidden");

  return true;
}

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (required(inputName) && required(email) && required(message)) {
    if (validateEmail(email.value) == false) {
      email.classList.add("error-border");
      warningText.classList.remove("hidden");
      warningIcon.classList.remove("hidden");
    } else {
      alert("your email has been sent");
      form.submit();
    }
  }
});
