document.getElementById('registerBtn').addEventListener('click', function () {
    document.getElementById('registerForm').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
});

document.getElementById('loginBtn').addEventListener('click', function () {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('registerForm').style.display = 'none';
});
