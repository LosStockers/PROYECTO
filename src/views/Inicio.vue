<template>
  <v-row class="SubirProd">
    <v-card class="cardProd">
      <v-container width="">
        <v-col col="12">
          <v-text-field
            label="Nombre"
            required
            placeholder="Fabuloso"
            type="text"
            id="FormNombre"
            class="Formulario"
          ></v-text-field>
        </v-col>

        <v-col col="12">
          <v-text-field
            label="Stock"
            placeholder="56u"
            type="int"
            id="FormStock"
            class="Formulario"
          ></v-text-field>
        </v-col>

        <v-col col="12" >
          <v-autocomplete
            label="Categoria"
            id="FormCateg"
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
            id="FormTamaño"
            class="Formulario"
          ></v-text-field>
        </v-col>

        <v-col col="12">
          <v-file-input
            label="Imagen"
            prepend-icon=""
            accept="image/png, image/jpeg, image/bmp, image/jpg"
            id="NombIMG"
            class="Formulario"
          ></v-file-input>
        </v-col>

        <v-card class="Botonera">
          <v-col
          cols="12"
          >
            <v-btn @click="MandarDatos()" class="Botones">Subir</v-btn>
            <v-btn onclick="Previsualisar" class="Botones">Previsualisar</v-btn>
            <v-btn class="Botones">Cancelar</v-btn>
        </v-col> 
      </v-card> 
      </v-container>
    </v-card>
  </v-row>
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
    margin-left: 7%;
    margin-top: 3%;
    margin-bottom: 3%;
    justify-content: center;
    width: 40%;
    height: 80%;
    background-color: rgb(186, 186, 255);
  }
  .cardProd {
    width: 97%;
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

</style>

<script setup>
import { RouterLink } from 'vue-router';

function MandarDatos() {
  
  let NombreP = document.getElementById('FormNombre').value
  let StockP = document.getElementById('FormStock').value
  let CategoriaP = document.getElementById('FormCateg').value
  let TamañoP = document.getElementById('FormTamaño').value
  let NombIMGP = document.getElementById('NombIMG').value

}

function Previsualisar() {

  let NombreP = document.getElementById('FormNombre').value
  let StockP = document.getElementById('FormStock').value
  let CategoriaP = document.getElementById('FormCateg').value
  let TamañoP = document.getElementById('FormTamaño').value
  let NombIMGP = document.getElementById('NombIMG').value

}
</script>