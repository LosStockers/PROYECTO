const btnCrearCuenta = document.getElementById('btn-crear-cuenta');
const btnVolverLogin = document.getElementById('btn-volver-login');
const loginPestaña = document.getElementById('login-pestaña');
const registroPestaña = document.getElementById('registro-pestaña');

btnCrearCuenta.addEventListener('click', () => {
  loginPestaña.style.animation = 'girarFormulario 0.5s forwards';
  registroPestaña.style.animation = 'mostrarFormulario 0.5s forwards';
  registroPestaña.style.display = 'block';
  loginPestaña.style.display = 'none';
});

btnVolverLogin.addEventListener('click', () => {
  registroPestaña.style.animation = 'girarFormulario 0.5s forwards';
  loginPestaña.style.animation = 'mostrarFormulario 0.5s forwards';
  registroPestaña.style.display = 'none';
  loginPestaña.style.display = 'block';
});