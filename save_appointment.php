<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preluarea datelor din formular
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);

    // Crearea unui string pentru a salva datele
    $appointment = "Nume: $name, Email: $email, Telefon: $phone, Data: $date, Ora: $time\n";

    // Salvarea datelor într-un fișier text
    file_put_contents('appointments.txt', $appointment, FILE_APPEND);

    // Redirectare sau mesaj de succes
    echo "Programarea a fost salvată cu succes!";
} else {
    echo "Metodă de cerere invalidă.";
}
?>
