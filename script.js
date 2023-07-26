const carrusel = document.querySelector('.carrusel');
const imagenes = document.querySelectorAll('.imagen');


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
  Registro.classList.remove('active-popup');
});


let contador = 0;

function mostrarImagen(indice) {
  imagenes.forEach((imagen, index) => {
    imagen.style.transform = `translateX(${(index - indice) * 100}%)`;
  });
}

function siguienteImagen() {
  contador++;
  if (contador === imagenes.length) {
    contador = 0;
  }
  mostrarImagen(contador);
}

function imagenAnterior() {
  contador--;
  if (contador < 0) {
    contador = imagenes.length - 1;
  }
  mostrarImagen(contador);
}

setInterval(siguienteImagen, 3000); // Cambia la imagen cada 3 segundos (puedes ajustar este valor)

mostrarImagen(contador);
