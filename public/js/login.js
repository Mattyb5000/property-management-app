const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("were in login js");
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
      console.log("YOU ARE ALMOST THERE!!!!");
    } else {
      alert('Failed to log in.');
    }
  }
};
const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log('were in signup');
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
      console.log("YOU ARE ALMOST FINISHED!!!!");
    } else {
      alert('Please try to login again.');
    }
  }
};
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);