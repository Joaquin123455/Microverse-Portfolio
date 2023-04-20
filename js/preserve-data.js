// Capture the form and form elements
const fname = document.getElementById('f-name');
const femail = document.getElementById('f-email');
const ftextarea = document.getElementById('f-msg');

// Get data from the javascript object
function getFormData() {
  const userData = localStorage.getItem('userData');
  if (userData !== null) {
    const userDataObj = JSON.parse(userData);
    fname.value = userDataObj.name;
    femail.value = userDataObj.email;
    ftextarea.value = userDataObj.message;
  }
}
