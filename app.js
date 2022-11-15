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
  inputtx.classList.remove("correct-border");
  if (inputtx.value.length == 0) {
    inputtx.classList.add("error-border");
    warning.classList.remove("hidden");
    return false;
  }
  warning.classList.add("hidden");
  inputtx.classList.add("correct-border");
  return true;
}

//submit the form
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //check if they are empty or not
  if (required(inputName) && required(email) && required(message)) {
    //check if is correct email
    if (validateEmail(email.value) == false) {
      email.classList.remove("correct-border");
      email.classList.add("error-border");
      warningText.classList.remove("hidden");
      warningIcon.classList.remove("hidden");
    } else {
      alert("your email has been sent");
      form.submit();
    }
  }
});
