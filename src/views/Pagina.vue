
<template>
  <div>
    <v-btn
      fab
      dark
      color="primary"
      @click="agregarFoto"
    >
      <v-icon>mdi-camera</v-icon>
    </v-btn>

    <v-form>
      <v-text-field
        label="Nombre del producto"
        v-model="nombre"
      ></v-text-field>

      <v-text-field
        label="Precio del producto"
        v-model="precio"
      ></v-text-field>

      <v-btn
        color="primary"
        @click="guardarProducto"
      >
        Guardar producto
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      precio: '',
    }
  },

  methods: {
    agregarFoto() {
      // TODO: Implementar la lógica para agregar una foto
    },

    guardarProducto() {
      // TODO: Implementar la lógica para guardar el producto
    },
  },
}
</script>
