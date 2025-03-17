const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Servește fișierele statice din același folder

// Endpoint pentru a obține pacienții
app.get('/api/patients', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint pentru a adăuga un pacient
app.post('/api/patients', (req, res) => {
    const newPatient = req.body;

    fs.readFile('data.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }
        const patients = JSON.parse(data);
        patients.push(newPatient);

        fs.writeFile('data.json', JSON.stringify(patients, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to data file');
            }
            res.status(201).send('Patient added');
        });
    });
});

// Pornirea serverului
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
