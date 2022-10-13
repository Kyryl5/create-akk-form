const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');      
const btn = document.querySelector('.button');
const popupTitle = document.querySelector('.email-user');
const finalTitle = document.querySelector('.final-email');
const confirmButton = document.querySelector('.popup-confirm');
const cancelButton = document.querySelector('.popup-cancel');
const cancelArea = document.querySelector('.popup-body');

if (localStorage.getItem('user_email')) {
  popupTitle.innerHTML = `Please confirm account creation for ${localStorage.getItem('user_email')}`;
  finalTitle.innerHTML = `Hello user with email: ${localStorage.getItem('user_email')}`;
}

function submitHundler() {
  localStorage.setItem('user_email', emailInput.value)
  popupTitle.innerHTML = `Please confirm account creation for ${localStorage.getItem('user_email')}`;
  location.href = '#popup'  
}

function confirmButtonHundler() {
  finalTitle.innerHTML = `Hello user with email: ${localStorage.getItem('user_email')}`;
  location.href = '#final-create'    
}

function cancelButtonHundler(e) {
  if (e.target.className == 'popup-body' || e.target.className == 'popup-cancel') {
    location.href = '#login-form'
  }
}

btn.addEventListener('click', submitHundler);
confirmButton.addEventListener('click', confirmButtonHundler);
cancelButton.addEventListener('click', cancelButtonHundler);
cancelArea.addEventListener('click', cancelButtonHundler);

function checkInputs() {
  emailInput.value.match(/^\S+@\S+\.\S+$/)
  && passwordInput.value.match(/[a-zA-Z0-9]{4,}$/)
  ? btn.disabled = false : btn.disabled = true;
}

function checkEmail() {
  !emailInput.value.match(/^\S+@\S+\.\S+$/) ? emailInput.classList.add('error') : emailInput.classList.remove('error')  
  checkInputs()
}

function checkPassword() {
  !passwordInput.value.match(/[a-zA-Z0-9]{4,}$/) ? passwordInput.classList.add('error')
  : passwordInput.classList.remove('error')  
  checkInputs()
}

emailInput.addEventListener('input', checkEmail);
passwordInput.addEventListener('input', checkPassword);

document.querySelector(".show-password").addEventListener('click',
  function () {
    if (this.classList[2] === "fa-eye-slash") {
      this.classList.remove('fa-eye-slash');
      this.classList.add('fa-eye');
      passwordInput.type = 'text';
    } else {
      this.classList.remove('fa-eye');
      this.classList.add('fa-eye-slash');
      passwordInput.type = 'password';
    }
  }
)