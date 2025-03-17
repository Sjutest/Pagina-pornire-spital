document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const cnp = document.getElementById('cnp').value;
    const dob = document.getElementById('dob').value;
    const sex = document.getElementById('sex').value;

    const patientList = document.getElementById('patients');
    const listItem = document.createElement('li');
    listItem.textContent = `Nume: ${name}, CNP: ${cnp}, Data Nașterii: ${dob}, Sex: ${sex}`;
    
    patientList.appendChild(listItem);

    // Resetare formular
    document.getElementById('form').reset();
});
