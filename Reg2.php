<?php
//include_once "apk.php";

$email = $_POST["email"]; 
$pass = $_POST["password"];
$usuario = $_POST["text"];



// Login
if (isset($_POST["btnlogin"])) {
    $query = mysqli_query($conn, "SELECT * FROM Login WHERE Email = '$email' AND Contraseña = '$pass'");
    $nfila = mysqli_num_rows($query);

    if ($nfila == 1) {
       //echo "<script> alert('Bienvenido'); window.location='Test.html'; </script>";
    } else {
        echo "<script> alert('Email o contraseña incorrecta'); window.location='index.html'; </script>";
    }
}

// Register
if (isset($_POST["btnregistrar"])) {
    $sqlgrabar = "INSERT INTO Login (Email, Contraseña) VALUES ('$email','$pass','$usuario')";

    if (mysqli_query($conn, $sqlgrabar)) {
        echo "<script> alert('Registro exitoso'); window.location='Test.html'; </script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>
