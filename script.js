document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Logica de autentificare va fi implementată aici
    console.log(`Utilizator: ${username}, Parolă: ${password}`);
});
