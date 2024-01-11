document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerBtn = document.getElementById('register-btn');
    const registerForm = document.getElementById('evaluation-forms');

    registerBtn.addEventListener('click', function () {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
});

function login() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username.toLowerCase() === "admin" && password === "password") {
      window.location.href = "ig.html";
    } else {
      window.location.href = "ig.html";
    }
  }

function register() {
    // Implement registration functionality
    // Store the registered username and password in a secure manner (e.g., a server-side database)
    alert('Registration successful! You can now login.');
    // Redirect to login page
    document.getElementById('evaluation-forms').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}