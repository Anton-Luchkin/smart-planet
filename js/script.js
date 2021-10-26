const formRef = document.querySelector('.register-form');
const btnRef = document.querySelector('.btn-confirm');
const checkRef = document.querySelector('.privacy-policy');

checkRef.addEventListener('change', event => {
   btnRef.disabled = !event.target.checked;
});

formRef.addEventListener('submit', event => {
   event.preventDefault();

   document.location.href = "./reservation.html";
} )

