<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmare Programare</title>
</head>
<body>

<div class="container">
    <h2>Confirmare Programare</h2>
    <p>Programarea ta a fost salvată cu succes!</p>
    <p>Cod ul tău este: <?php echo htmlspecialchars($_GET['code']); ?></p>
    <p>Te rugăm să păstrezi acest cod pentru referințe viitoare.</p>
    <a href="index.html" class="btn btn-primary">Înapoi la Pagina Principală</a>
</div>

</body>
</html>
