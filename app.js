const inputName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const warningText = document.getElementById("warningText");
const warningIcon = document.getElementById("warningIcon");
const form = document.querySelector("form");
const warning = document.querySelector(".warning");
console.log(warning);
let counterError = 0;
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//check input if it is empty or not
function checkInput(text) {
  if (text.value != "") {
    text.classList.remove("error-border");
    text.classList.add("border-Green");
    warning.classList.add("hidden");
  }
  if (text.value.length > 0) {
    if (text.classList.contains("border-Grey")) {
      text.classList.remove("border-Grey");
      text.classList.add("border-Green");
      warning.classList.remove("hidden");
    }
  } else {
    text.classList.add("error-border");
    warning.classList.remove("hidden");
    counterError++;
  }
}

sendBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  // checkInput(inputName);
  // checkInput(email);
  // if (validateEmail(email.value) == false) {
  //   email.classList.add("error-border");
  //   counterError++;
  //   if (email.value != "") {
  //     warningText.classList.remove("hidden");
  //     warningIcon.classList.remove("hidden");
  //   }
  // } else {
  //   email.classList.add("border-Green");
  //   counterError = 0;
  //   warningText.classList.add("hidden");
  //   warningIcon.classList.add("hidden");
  // }
  // checkInput(message);
  // if (counterError == 0) {
  //   alert("your email has been sent");
  //   form.submit();
  // }
  alert("your email has been sent");
});
