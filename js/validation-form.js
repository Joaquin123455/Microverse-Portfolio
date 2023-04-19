const email = document.getElementById('f-email');
const form = document.getElementById('f-contact-form');
const small = document.querySelector('small');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  small.innerText = '';
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    return;
  }
  small.style.color = '#000000';
  small.innerText = 'Please enter your email in lowercase.';
});
