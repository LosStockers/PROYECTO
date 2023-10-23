<template>
  <v-app>
    <h1>Tus Productos</h1>
    <v-btn @click="navigateToInicio" class="navigate-button" color="primary">Agregar Productos</v-btn>
    <div class="todo">

      <v-btn @click="tuAccion" class="inner-button" color="secondary">Botón Interior</v-btn>

    </div>
  </v-app>
</template>

<script>
import { ref } from 'vue';
export default {
  methods: {
    navigateToInicio() {
      this.$router.push({ name: "Inicio" });
    }
  }
};

 function tuAccion(){
      // Define aquí lo que quieres que haga el botón interior
      // Por ejemplo, mostrar un mensaje de alerta
      alert('Botón interior clickeado');
    };
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
  position: absolute;
  bottom: 10px;
  right: 10px;
}

h1{
  margin-left: 40% ;
}


</style>