// Funcție pentru a încărca pacienții din Local Storage
function loadPatients() {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const patientList = document.getElementById('patients');
    patientList.innerHTML = ''; // Curăță lista existentă

    patients.forEach(patient => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nume: ${patient.name}, CNP: ${patient.cnp}, Data Nașterii: ${patient.dob}, Sex: ${patient.sex}`;
        patientList.appendChild(listItem);
    });
}

// Funcție pentru a salva pacienții în Local Storage
function savePatient(patient) {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));
}

// Evenimentul de submit al formularului
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const cnp = document.getElementById('cnp').value;
    const dob = document.getElementById('dob').value;
    const sex = document.getElementById('sex').value;

    const patient = { name, cnp, dob, sex };
    
    // Salvează pacientul în Local Storage
    savePatient(patient);

    // Adaugă pacientul în listă
    loadPatients();

    // Resetare formular
    document.getElementById('form').reset();
});

// Încărcați pacienții la deschiderea aplicației
loadPatients();
