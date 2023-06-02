<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "Login/Registro";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn){
    die("No hay sistema mi estimado " .mysqli_connect_error()); 
}

// Login
if (isset($_POST["btnlogin"])) {
    $email = $_POST["correo"]; 
    $pass = $_POST["pass"];

    $query = mysqli_query($conn, "SELECT * FROM Login WHERE Email = '$email' AND Contraseña = '$pass'");
    $nfila = mysqli_num_rows($query);

    if ($nfila == 1) {
        echo "<script> alert('Bienvenido'); window.location='Test.html'; </script>";
    } else {
        echo "<script> alert('Email o contraseña incorrecta'); window.location='index.html'; </script>";
    }
}

// Register
if (isset($_POST["btnregistrar"])) {
    $usuario = $_POST["Usuario"];
    $emailreg = $_POST["correoreg"]; 
    $passreg = $_POST["passreg"];

    // Consulta para verificar si el correo electrónico ya existe
    $query = mysqli_query($conn, "SELECT COUNT(*) AS count FROM Login WHERE Email = '$emailreg'");
    $result = mysqli_fetch_assoc($query);
    $count = $result['count'];

    if ($count > 0) {
        // El correo electrónico ya existe en la base de datos
        // Puedes mostrar un mensaje de error o redirigir al usuario a otra página
        echo "<script> alert('El correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.'); window.location='index.html'; </script>";
        
        

    }

    $sqlgrabar = "INSERT INTO Login(Email, Contraseña, Usuario) VALUES ('$emailreg', '$passreg', '$usuario')";

    if (mysqli_query($conn, $sqlgrabar)) {
        echo "<script> alert('Registro exitoso'); window.location='Test.html'; </script>";
    } else {
        echo "Error: " . $sqlgrabar . "<br>" . mysqli_error($conn);
    }
}

?>
