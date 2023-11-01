<template>

  <div class="izqF">
    <v-form id="SubirProdF" class="SubirProd">
     <v-card class="cardProd">

        <v-col>
          <v-text-field
            label="Nombre"
            required
            placeholder="Fabuloso"
            type="text"
            v-model="NombreForm"
            class="Formulario"
            id="Nombre"
          ></v-text-field>

        </v-col>

        <v-col col="12">
          <v-text-field
            label="Stock"
            placeholder="56u"
            type="int"
            v-model="FormStock"
            class="Formulario"
            id="Stock"
          ></v-text-field>
        </v-col>

        <v-col col="12" >
          <v-autocomplete
            label="Categoria"
            v-model="FormCateg"
            :items="['Tecnologia', 'Alimentos', 'Bebida', 
                'Ropa y moda', 'Congelados', 'Enlatados', 
                'Electricos', 'Limpieza', 'Jugetes', 'Libros', 
                'Plantas y jardin', 'Decoracion', 'Productos salud', 
                'Otros']"
                class="Formulario"
            id="Categoria"
          ></v-autocomplete>
        </v-col>

        <v-col col="8" >
          <v-text-field
            label="Tamaño"
            placeholder="150g"
            type=""
            v-model="FormTamaño"
            class="Formulario"
            id="Tamaño"
          ></v-text-field>
        </v-col>

        <v-col col="12">
          <input type="file" @change="transIMG">
        </v-col>
        
        <v-card class="Botonera">
          <v-col
          cols="12"
          >
          <v-btn @Click="enviarDatos()" class="Botones">Subir</v-btn>
          
          <v-btn @Click="conectarDB()" class="Botones">Cancelar</v-btn>
         </v-col> 
        </v-card> 

    </v-card>
  </v-form>
</div>

<div class="derP">

    <div id="IMGmos" style="display: block;" >
      <img v-if="imageurl==null" src="arbol.jpg" id="imagenMostrada" alt="Imagen Predefinida" 
      style="max-width: 150px; max-height: 150px; " >
      <img v-if="imageurl" :src="imageurl" >
      
    </div>

        <div id="DatosMos"  style="display: block;" >
          <h3>Datos del producto:</h3>
          <p><strong>Nombre:</strong>{{ NombreForm }}</p>
          <p><strong>Stock:</strong>{{ FormStock }}</p>
          <p><strong>Categoría:</strong>{{ FormCateg }}</p>
          <p><strong>Tamaño:</strong>{{ FormTamaño }}</p>
        </div>



</div>


  
</template>

<style scoped>
  body,
  html {
    height: 100%;
    width: 100%;
    padding: 0%;
    margin: 0;
  }


  .SubirProd {
    
    margin-left: 2%;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(186, 186, 255);
  }
  .cardProd {
    width: 96%;
    height: 94%;
    margin: 2%;
    top: 2%;
    bottom: 2%;
    
  }
 
  .izqF{
    position: relative;
    float: left;
    width: 45%;
  }

  .derP{
    position: absolute;
    right: 45px;
    top: 300px;
    width: 45%;
    
    background-color: rgb(186, 186, 255)
  }

  #IMGmos{
    margin: 5%;
    float: left ;
  }
img {
    border-style: none;
    width: 150px;
}


  .Botones {
    margin-bottom: 3%;
  }
  .Botonera{
    text-align: center;
    left: 10%;
    width:80%;
    justify-content: center;
  }
  


</style>



<script setup>
import { ref } from 'vue'


  const NombreForm = ref("")
  const FormStock = ref("")
  const FormCateg = ref("")
  const FormTamaño = ref("")

const imageurl = ref(null)

const transIMG = (e) => {
  const files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  createImage(files[0]);
}

const createImage = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    imageurl.value = e.target.result;
  };
  reader.readAsDataURL(file);
}

const inputNombre = document.getElementById("Nombre")
    const inputStock = document.getElementById("Stock")
    const inputCategoria = document.getElementById("Categoria")
    const inputTamaño = document.getElementById("Tamaño")

    let datos = {
    NombreForm,
    FormStock,
    FormCateg,
    FormTamaño
  }

function enviarDatos() {
  
  fetch("https://localhost/api/subirprod.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: inputNombre, inputStock, inputCategoria, inputTamaño
    }); 
  }

  
/*
  function pconexion() {
   fetch("https://localhost/api/conexion.php", {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
   }).then(res=>res.JSON()).then(
    res=>(){
      console.log(res)
    }
   ) 
  }
*/
/*
  const conectarDB= async()=>{
    await fetch("http://localhost/api/conexion.php")
    .then(res=> res.json())
    .then(data=> console.log(data))
  }
  conectarDB()
//recoje datos en php v
//$datos = file_get_contents('php://input');
*/
</script>