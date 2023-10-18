<template>
  <v-app>
    <v-btn @click="navigateToInicio" class="navigate-button" color="primary">Ir a Inicio</v-btn>
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
  width: 50%;
  height: 50%;
  background-color: red;
  margin-left: 20%;
  margin-top:10% ;

}
</style>