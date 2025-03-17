// Adăugare Doctor
document.getElementById('adaugaDoctor').onclick = function() {
    const doctorNume = document.getElementById('doctorNume').value.trim();
    const doctorSectie = document.getElementById('doctorSectie').value.trim();
    if (doctorNume && doctorSectie) {
        let doctori = JSON.parse(localStorage.getItem('doctori')) || [];
        doctori.push({ nume: doctorNume, sectie: doctorSectie });
        localStorage.setItem('doctori', JSON.stringify(doctori));
        alert('Doctorul a fost adăugat!');
        document.getElementById('doctorNume').value = '';
        document.getElementById('doctorSectie').value = '';
        updatePersonalTable();
    } else {
        alert('Vă rugăm să introduceți un nume și o secție valide.');
    }
};

// Adăugare Asistent
document.getElementById('adaugaAsistent').onclick = function() {
    const asistentNume = document.getElementById('asistentNume').value.trim();
    const asistentSectie = document.getElementById('asistentSectie').value.trim();
    if (asistentNume && asistentSectie) {
        let asistenti = JSON.parse(localStorage.getItem('asistenti')) || [];
        asistenti.push({ nume: asistentNume, sectie: asistentSectie });
        localStorage.setItem('asistenti', JSON.stringify(asistenti));
        alert('Asistentul a fost adăugat!');
        document.getElementById('asistentNume').value = '';
        document.getElementById('asistentSectie').value = '';
        updatePersonalTable();
    } else {
        alert('Vă rugăm să introduceți un nume și o secție valide.');
    }
};

// Adăugare Secție
document.getElementById('adaugaSectie').onclick = function() {
    const numeSectie = document.getElementById('numeSectie').value.trim();
    if (numeSectie) {
        let sectii = JSON.parse(localStorage.getItem('sectii')) || [];
        sectii.push(numeSectie);
        localStorage.setItem('sectii', JSON.stringify(sectii));
        alert('Secția a fost adăugată!');
        document.getElementById('numeSectie').value = '';
        updateSectiiTable();
    } else {
        alert('Vă rugăm să introduceți un nume valid pentru secție.');
    }
};

// Funcție pentru actualizarea tabelului personal
function updatePersonalTable() {
    const personalBody = document.getElementById('personalBody');
    personalBody.innerHTML = ''; // Clear existing rows

    const doctori = JSON.parse(localStorage.getItem('doctori')) || [];
    const asistenti = JSON.parse(localStorage.getItem('asistenti')) || [];

    doctori.forEach(doctor => {
        personalBody.innerHTML += `
            <tr>
                <td>Doctor</td>
                <td>${doctor.nume}</td>
                <td>${doctor.sectie}</td>
                <td><button onclick="stergePersonal('doctor', '${doctor.nume}')">Șterge</button></td>
            </tr>
        `;
    });

    asistenti.forEach(asistent => {
        personalBody.innerHTML += `
            <tr>
                <td>Asistent</td>
                <td>${asistent.nume}</td>
                <td>${asistent.sectie}</td>
                <td><button onclick="stergePersonal('asistent', '${asistent.nume}')">Șterge</button></td>
            </tr>
        `;
    });
}

// Funcție pentru ștergerea personalului
function stergePersonal(tip, nume) {
    const confirmDelete = confirm(`Sigur doriți să ștergeți acest ${tip}?`);
    if (confirmDelete) {
        if (tip === 'doctor') {
            let doctori = JSON.parse(localStorage.getItem('doctori')) || [];
            doctori = doctori.filter(doctor => doctor.nume !== nume);
            localStorage.setItem('doctori', JSON.stringify(doctori));
        } else if (tip === 'asistent') {
            let asistenti = JSON.parse(localStorage.getItem('asistenti')) || [];
            asistenti = asistenti.filter(asistent => asistent.nume !== nume);
            localStorage.setItem('asistenti', JSON.stringify(asistenti));
        }
        alert(`${tip.charAt(0).toUpperCase() + tip.slice(1)} a fost șters!`);
        updatePersonalTable();
    }
}

// Funcție pentru actualizarea tabelului secțiilor
function updateSectiiTable() {
    const sectiiBody = document.getElementById('sectiiBody');
    sectiiBody.innerHTML = ''; // Clear existing rows

    const sectii = JSON.parse(localStorage.getItem('sectii')) || [];
    sectii.forEach(sectie => {
        sectiiBody.innerHTML += `
            <tr>
                <td>${sectie}</td>
                <td><button onclick="stergeSectie('${sectie}')">Șterge</button></td>
            </tr>
        `;
    });
}

// Funcție pentru ștergerea secției
function stergeSectie(nume) {
    const confirmDelete = confirm(`Sigur doriți să ștergeți secția ${nume}?`);
    if (confirmDelete) {
        let sectii = JSON.parse(localStorage.getItem('sectii')) || [];
        sectii = sectii.filter(sectie => sectie !== nume);
        localStorage.setItem('sectii', JSON.stringify(sectii));
        alert('Secția a fost ștearsă!');
        updateSectiiTable();
    }
}

// Inițializare tabele
updatePersonalTable();
updateSectiiTable();