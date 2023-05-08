const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

const loginiText = document.querySelector(".title .logini");
const loginiForm = document.querySelector("form.logini");
const loginiBtn = document.querySelector("label.logini");
const signupsBtn = document.querySelector("label.signups");
const signupsLink = document.querySelector("form .signups-link a");

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});


signupsBtn.onclick = (()=>{
  loginiForm.style.marginLeft = "-50%";
  loginiText.style.marginLeft = "-50%";
});
loginiBtn.onclick = (()=>{
  loginiForm.style.marginLeft = "0%";
  loginiText.style.marginLeft = "0%";
});
signupsLink.onclick = (()=>{
  signupsBtn.click();
  return false;
});
