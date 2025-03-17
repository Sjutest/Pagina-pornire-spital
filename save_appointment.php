<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preluarea datelor din formular
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);

    // Generarea unui cod aleatoriu de 8 caractere
    $code = bin2hex(random_bytes(4)); // 8 caractere hexazecimale

    // Salvarea datelor într-un fișier text
    $appointment = "Nume: $name, Email: $email, Telefon: $phone, Data: $date, Ora: $time, Cod: $code\n";
    file_put_contents('appointments.txt', $appointment, FILE_APPEND);

    // Trimiterea emailului
    $to = $email;
    $subject = "Confirmare Programare";
    $message = "Programarea ta a fost salvată!\nCodul tău este: $code\nData: $date\nOra: $time";
    $headers = "From: sju.2025.programari@gmail.com";

    mail($to, $subject, $message, $headers);

    // Redirectare către pagina de confirmare
    header("Location: confirmation.php?code=$code");
    exit();
} else {
    echo "Metodă de cerere invalidă.";
}
?>
