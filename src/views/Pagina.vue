<template>
  <v-app>
    <h1>Tus Productos</h1>
  <input type="button" value="Agregar Productos" @click="paginaCoso" class="navigate-button">
    <div class="todo">
      <div class="derP">

        <div id="DatosMos"  style="display: block;" >
          <table style="width:100%" justify-content="center"> 
            <tr>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Categoria</th>
                <th>Tamaño</th>
            </tr>
          </table>
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
    useroute.push("/subir")
}



const cosito = ref([])
const funcionCosito=async()=>{

  await fetch("http:localhost/traer_elementos.php")
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