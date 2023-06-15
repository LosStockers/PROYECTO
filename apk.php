<?php
//No se como funciona ni si los hace

include('conexion.php');

$usuario = $_POST["Usuario"];
$email = $_POST["correo"]; 
$pass = $_POST["pass"];

//Para iniciar sesión
if(isset($_POST["btnlogin"]))
{

$queryusuario = mysqli_query($conn,"SELECT * FROM login WHERE Email = '$email'");
$nr 		= mysqli_num_rows($queryusuario); 
$mostrar	= mysqli_fetch_array($queryusuario); 
	
if (($nr == 1) && (password_verify($pass,$mostrar['Contraseña'])) )
	{ 
		session_start();
		$_SESSION['nombredelusuario']=$usuario;
		header("Location: test.html");
	}
else
	{
	echo "<script> alert('Usuario o contraseña incorrecto.');window.location= 'index.html' </script>";
	}
}

//Para registrar
if(isset($_POST["btnregistrar"]))
{

$queryusuario 	= mysqli_query($conn,"SELECT * FROM login WHERE Usuario = '$usuario'");
$nr 			= mysqli_num_rows($queryusuario); 

if ($nr == 0)
{

	$pass_fuerte = password_hash($pass, PASSWORD_BCRYPT);
	$queryregistrar = "INSERT INTO login(Usuario, Email, Contraseña) values ('$usuario','$email''$pass_fuerte')";
	

if(mysqli_query($conn,$queryregistrar))
{
	echo "<script> alert('Usuario registrado: $usuario');window.location= 'test.html' </script>";
}
else 
{
	echo "Error: " .$queryregistrar."<br>".mysqli_error($conn);
}

}else
{
		echo "<script> alert('No puedes registrar a este usuario: $usuario');window.location= 'index.html' </script>";
}

} 

?>