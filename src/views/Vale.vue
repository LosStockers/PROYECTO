<template>
    <div class="Vale">
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOCOTROCO</title>
    <link rel="stylesheet" href="vale.css">
</head>
<body> 
  <div id="base">
    <div id="cabeza">
      <header>
        <div class="logo">
          <a href="inicio.html">
            <img src="LOGITOCOSITO Y YO QUE SE.png" alt="Logo">
          </a>
        </div>
        <div class="buttons">
          <a href="atras.html" class="back-button">Atrás</a>
          <button disabled>Botón 1</button>
          <button disabled>Botón 2</button>
        </div>
      </header>
    </div>
    <div id="cuerpo">
      <div class="todo">
        <a href="pagos.html" class="button left">+</a>
        <div class="gestor-info">
          <header class="header">
            <h2>mueve el toto</h2>
          </header>
          <div class="gestor-img">
            <img src="fabuloso.jpg" alt="Imagen del Gestor">
          </div>
          <div class="texto">
          <p class="color-texto">Lorem ipsum dolor sit amet consectetur pudiandae tempora ipsam quaerat eum.</p>
        </div>
        </div>
        
        <a href="pagos.html" class="button right">+</a>
      </div>
      
    </div>
  </div>
  <script src="vale.js"></script>
</body>
</html>

    </div>
</template>

<style>
*
/*.back1 {
    width: 250px;
    height: 400px;
    background-color: blue;
    margin: 10px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);  
}*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

#base {
  flex: 1;
}

#cabeza {
  background-color: #f2f2f2;
  padding: 10px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px;
}

.buttons {
  display: flex;
  gap: 10px;
}

.back-button {
  background-color: #261616;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
}

.gestor-info {
  width: 350px;
  height: 600px;
  background: linear-gradient(to bottom, #4a4b4ae7, #222325ec);
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  position: relative; 
}

#cuerpo {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(zyro-image.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 93%;
  overflow: hidden;
  
}

.todo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  background-color: #292b2ac8;
  color: rgb(255, 255, 255);
  font-size: 24px;
  border-radius: 50%;
  margin: 0 10px;
  text-decoration: none;
}

.gestor-info h2 {
  color: white;
  font-size: 24px;
}
.header h2 {
  color: #ffffff;
  font-size: 24px;
}

.info {
  color: #fff;
}

.gestor-img {
  width: 75%;
  height: 40%;
  overflow: hidden;
  border-radius: 35px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgb(0, 0, 0);
  margin-top: 15px;
  
}

.gestor-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.gestor-info {
  position: relative;
}

.header {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: #333333fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border: radius top 10px; ;
}



.texto {
  width: 100%;
  height: 20%;
  border: 5px solid rgba(41, 41, 41, 0.734); /* Solo para visualización */
  padding: 10px; /* Opcional: añade espaciado interno */
  margin-top: 15px;
  border-radius: 0%;
}

.color-texto {
  color:#fff
}

</style>