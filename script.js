 document.addEventListener('DOMContentLoaded', function () {
    const btnCrearCuenta = document.getElementById('btn-crear-cuenta');
    const btnVolverLogin = document.getElementById('btn-volver-login');
    const formularioCrearCuenta = document.getElementById('registro-pestaña');
    const formularioInicioSesion = document.getElementById('login-pestaña');

    btnCrearCuenta.addEventListener('click', function () {
      formularioCrearCuenta.style.display = 'block';
      formularioInicioSesion.style.display = 'none';
    });

    btnVolverLogin.addEventListener('click', function () {
      formularioCrearCuenta.style.display = 'none';
      formularioInicioSesion.style.display = 'block';
    });
  });




