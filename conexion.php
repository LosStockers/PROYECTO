<?php  
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "Login/Registro";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn){
    die("No hay sistema mi estimado " .mysqli_connect_error());
}
?>