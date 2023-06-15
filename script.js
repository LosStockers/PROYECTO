//este llama a la constante Registrarse
const Registro = document.querySelector('.Registro')
//llama a la constante para loguear
const Botoniniciar = document.querySelector('.btnlogin-popup')
//llama a la constante para registrar
const registerLink = document.querySelector('.link-registro')


//esto lo que hace es activar el registrarse (usable en css)
Botoniniciar.addEventListener('click', () => {
  Registro.classList.add('active-popup');
});

//esto es para iniciar sesion (usable en css)
registerLink.addEventListener('click', () => {
  Registro.classList.remove('active');
});
