//este llama a la constante login
const login = document.querySelector('.login')
//llama a la constante para loguear
const loginLink = document.querySelector('.link-iniciar')
//llama a la constante para registrar
const registerLink = document.querySelector('.link-registro')
//llama a la constante para usar el boton de login grande de arriba
const btnPopup = document.querySelector('.btnlogin-popup')
//esto es para usar la cruz de cerrado
const iconclose = document.querySelector('.icono-cerrado')



//esto lo que hace es activar el registrarse (usable en css)
registerLink.addEventListener('click', () => {
  login.classList.add('active');
});

//esto es para iniciar sesion (usable en css)
loginLink.addEventListener('click', () => {
  login.classList.remove('active');
});
//esto es para usar el boton grande de iniciar sesion de arriba (usable en css)
btnPopup.addEventListener('click', () => {
  login.classList.add('active-popup');
})
//esto es para poder modificar en css el boton (agrego un evento como en lo anteriores pero son casi las 5am y no tengo ganas de comentar otra vez las anteriores constantes)
iconclose.addEventListener('click', () => {
  login.classList.remove('active-popup')});