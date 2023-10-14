<template>
  <v-row class="SubirProd">
    <v-form id="SubirProdF">
     <v-card class="cardProd">
      <v-container width="">
        <v-col col="12">
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
          <v-file-input
            label="Imagen"
            prepend-icon=""
            accept="image/*"
            id="NombIMG"
            v-model="NombIMG"
            class="Formlario"
          ></v-file-input>
        </v-col>

        <v-card class="Botonera">
          <v-col
          cols="12"
          >
            <v-btn @Click="MandarDatos()" class="Botones">Subir</v-btn>
            
            <v-btn class="Botones">Cancelar</v-btn>
        </v-col> 
       </v-card> 
      </v-container>
     </v-card>
    </v-form>

  </v-row>


    <ul class="prevproductos">
      <li>
        <div id="IMGmos" style="display: block;">
          <img id="imagenMostrada" src="arbol.jpg" alt="Imagen Predefinida" 
          style="max-width: 200px; max-height: 200px;">
          
        </div>

        <div id="DatosMos"  style="display: block;">
          <h2>Datos del producto:</h2>
          <p><strong>Nombre:</strong>{{ NombreForm }}</p>
          <p><strong>Stock:</strong>{{ FormStock }}</p>
          <p><strong>Categoría:</strong>{{ FormCateg }}</p>
          <p><strong>Tamaño:</strong>{{ FormTamaño }}</p>
        </div>
      </li>
    </ul>


  
</template>

<style scoped>
  body,
  html {
    height: 100%;
    width: 100%;
    padding: 0%;
    margin: 0;
  }

  #SubirProdF{
    height: 100%;
    width: 100%;
  }
  .SubirProd {
    margin-left: 7%;
    margin-top: 3%;
    margin-bottom: 3%;
    justify-content: center;
    width: 40%;
    height: 80%;
    background-color: rgb(186, 186, 255);
  }
  .cardProd {
    width: 96%;
    margin: 2%;
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
  
  .prevproductos{
    float: right;
    position: relative;
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


   
/*    
        // Obtener los divs de imagen y datos por su ID
        const imagenContainer = document.getElementById('IMGmos');
        const datosContainer = document.getElementById('DatosMos');

        // Agregar un evento al botón de previsualizar
        function Previsualisar() {
            // Obtener los valores de los campos del formulario


            // Mostrar los datos en los elementos correspondientes
            document.getElementById('nombreMostrado').textContent = NombreForm;
            document.getElementById('stockMostrado').textContent = FormStock;
            document.getElementById('categoriaMostrada').textContent = FormCateg;
            document.getElementById('tamañoMostrado').textContent = FormTamaño;

            // Mostrar la imagen seleccionada o la predefinida si no se selecciona ninguna
            const imagenInput = document.getElementById('NombIMG');
            if (imagenInput.files.length > 0) {
                const imagenSeleccionada = imagenInput.files[0];
                const imagenURL = URL.createObjectURL(imagenSeleccionada);
                document.getElementById('IMGmos').src = imagenURL;
            } else {
                document.getElementById('IMGmos').src = '../components/arbol.jpg';
            }

            // Mostrar los divs de imagen y datos
            IMGmos.style.display = 'flex';
            DatosMos.style.display = 'block';
            };*/ 
</script>