<template>
  <v-app>
    <h1>Tus Productos</h1>
    <v-btn @click="navigateToInicio" class="navigate-button" color="primary">Agregar Productos</v-btn>
    <div class="todo">

  

    </div>
  </v-app>
</template>

<script>
export default {
  methods: {
    navigateToInicio() {
      this.$router.push({ name: "Inicio" });
    }
  }
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

h1{
  margin-left: 40% ;
}


</style>