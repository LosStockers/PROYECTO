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


  const btnsi = document.getElementById("btnsi");
  const btnno = document.getElementById("btnno");

  let lista = ["a","b","c","d","e","f"]
  let tope = 0
  
  function moverElSocotroco (lista, ) {
   if ((tope+2) > (lista.length-1)) {
    
   } else {
    div.innerText = lista[tope]+"-"+lista[tope+1]+" "+lista[tope+2]
   }
   
  }