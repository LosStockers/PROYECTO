<template>
  <v-app>
    <h1>Tus Productos</h1>
  <input type="button" value="Agregar Productos" @click="paginaCoso" class="navigate-button">
    <div class="todo">
      <div class="derP">

    <div id="IMGmos" style="display: block;" >
      <img v-if="imageurl==null" id="imagenMostrada" alt="Imagen Predefinida" 
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
        
        <v-btn @click="tuAccion" class="inner-button" color="secondary">Borrar</v-btn>

</div>


      
    </div>
    <v-btn @click="copiarDatosMos" class="inner" color="primary">Copiar y Pegar</v-btn>

  </v-app>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter } from "vue-router"
const useroute = useRouter()
const paginaCoso =()=>{
    useroute.push("/inicio")
}

const cosito = ref([])
const funcionCosito=async()=>{

  await fetch("http:localhost/coso.php")
  .then(res => res.json())
  .then(data => coso.value.push)

}

</script>

<style scoped>
.navigate-button {
  position: absolute;
  top: 20px;
  right: 20px;
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
  top: -15%;
}

.inner{

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