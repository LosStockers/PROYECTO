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
          ></v-text-field>

        </v-col>

        <v-col col="12">
          <v-text-field
            label="Stock"
            placeholder="56u"
            type="int"
            v-model="FormStock"
            class="Formulario"
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
          ></v-autocomplete>
        </v-col>

        <v-col col="12" >
          <v-text-field
            label="Tamaño"
            placeholder="150g"
            type=""
            v-model="FormTamaño"
            class="Formulario"
          ></v-text-field>
        </v-col>

        <v-col col="12">
          <input type="file" @change="transIMG">
        </v-col>
        
        <v-card class="Botonera">
          <v-col
          cols="12"
          >
          <v-btn @Click="MandarDatos()" class="Botones">Subir</v-btn>
          
          <v-btn class="Botones">Cancelar</v-btn>
         </v-col> 
        </v-card> 

    </v-card>
  </v-form>
</div>

<div class="derP">

    <div id="IMGmos" style="display: block;" >
      <img v-if="imageurl==null" id="imagenMostrada" src="arbol.jpg" alt="Imagen Predefinida" 
      style="max-width: 150px; max-height: 150px; " >
      <img v-if="imageurl" :src="imageurl" >
      
    </div>

        <div id="DatosMos"  style="display: block;" >
          <h2>Datos del producto:</h2>
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

<script >


/*const Formulario = document.getElementById('SubirProdF');

const PrevBoton = document.getElementById('PrevFormulario');

const datosMostrados = document.getElementById('DatosMos');
const IMGmostrada = document.getElementById('IMGmos');


PrevBoton.addEventListener('click', function (){

  const NombreP = document.getElementById('FormNombre').value
  const StockP = document.getElementById('FormStock').value
  const CategoriaP = document.getElementById('FormCateg').value
  const TamañoP = document.getElementById('FormTamaño').value
  const NombIMGP = document.getElementById('NombIMG').value

  console.log("HOLA")
})




/*function MandarDatos() {
  
}*/

function Previsualisar() {
    let NombreP = document.getElementById('FormNombre').value
    let StockP = document.getElementById('FormStock').value
    let CategoriaP = document.getElementById('FormCateg').value
    let TamañoP = document.getElementById('FormTamaño').value
    let NombIMGP = document.getElementById('NombIMG').value
  
   
  }

</script>

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

</script>