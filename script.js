document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cnp = document.getElementById('cnp').value;
    const dob = document.getElementById('dob').value;
    const sex = document.getElementById('sex').value;

    const patient = { name, cnp, dob, sex };

    fetch('/api/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
    .then(response => {
        if (response.ok) {
            alert('Pacient adăugat cu succes!');
            loadPatients();
        } else {
            alert('Eroare la adăugarea pacientului.');
        }
    });
});

function loadPatients() {
    fetch('/api/patients')
    .then(response => response.json())
    .then(patients => {
        const patientsList = document.getElementById('patients');
        patientsList.innerHTML = '';
        patients.forEach(patient => {
            const li = document.createElement('li');
            li.textContent = `${patient.name} - CNP: ${patient.cnp} - Data Nașterii: ${patient.dob} - Sex: ${patient.sex}`;
            patientsList.appendChild(li);
        });
    });
}

// Încarcă pacienții la început
loadPatients();
``` ### 6. Pornirea serverului

Pentru a porni serverul, asigură-te că ai Node.js instalat și rulează următoarea comandă în terminal:

```bash
node server.js
