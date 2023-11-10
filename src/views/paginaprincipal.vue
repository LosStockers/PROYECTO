<template>
  <v-app>
    <h1>Tus Productos</h1>
    <input type="button" value="Agregar Productos" @click="paginaCoso" class="navigate-button">
    <div class="todo">
      <div class="derP">


        <div class="fila" style="height: 80%;">
          <div id="IMGmos" class="columna" style="display: block;" >

            <img v-if="imageurl==null" src="image.png" class="sinImagen" alt="Imagen Predefinida" style="" >
            <img v-if="imageurl" :src="imageurl" >
          </div>

          <div id="DatosMos" class="columna"  style="display: block;" >
            <h2>Datos del producto:</h2>
            <p><strong>Nombre:</strong>{{ NombreForm }}</p>
            <p><strong>Stock:</strong>{{ FormStock }}</p>
            <p><strong>Categoría:</strong>{{ FormCateg }}</p>
            <p><strong>Tamaño:</strong>{{ FormTamaño }}</p>
          </div>


        </div>
        <div class="fila" style="height: 20%;">
          <v-btn @click="tuAccion" class="inner-button" color="secondary">Borrar</v-btn>

        </div>
        {{coso}}
        
      </div> 
    </div>
    <v-btn @click="copiarDatosMos" class="inner" color="primary">Copiar y Pegar</v-btn>

  </v-app>
</template>

sc
<script setup>
import { ref } from 'vue';

import { useRouter } from "vue-router"
const useroute = useRouter()
const coso = ref("")
const paginaCoso =()=>{
    useroute.push("/subir")
}



const cosito = ref([])
const funcionCosito=async()=>{


  await fetch("http://localhost/traer_elementos.php")
  .then(res => res.json())
  .then(data => coso.value.push(data))

}
funcionCosito()

</script>

<style scoped>
.columna{
  height: 100%;
  position: relative;
  float: left;
}

.fila{
  width: 100%;
}
.navigate-button {
  position: absolute;
  top: 20px;
  right: 20px;
}

.sinImagen{
  max-width: 50px; 
  max-height: 50px; 
  background-image: url("public/image.png");
  float: left;
}


.todo{
  width: 70%;
  height: 70%;
  background-color: red;
  margin-left: 15%;
  margin-top:5% ;

}

.inner-button {
  position: relative;
  right: 0%;
  bottom: 0%;
  float: right ;

}



h1{
  margin-left: 40% ;
}

.derP{
    position: relative;
    right: 0%;
    top: 0px;
    width: 60%;
    height: 40%;
    left: 15%;
    
    background-color: rgb(186, 186, 255)
  }


</style>