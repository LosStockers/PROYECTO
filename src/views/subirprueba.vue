<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-btn @click="openDialog">Subir</v-btn>
            <v-dialog v-model="dialog" max-width="500">
              <v-card>
                <v-card-title>Subir Producto</v-card-title>
                <v-card-text>
                  <v-form @submit.prevent="submitForm">
                    <v-autocomplete
                      v-model="selectedProduct"
                      :items="combinedProducts"
                      label="Seleccionar Producto"
                      autocomplete
                    ></v-autocomplete>
                    <v-text-field v-if="selectedProduct === 'Nuevo Producto'" v-model="newProductName" label="Nombre"></v-text-field>
                    <v-autocomplete
                      v-if="selectedProduct === 'Nuevo Producto'"
                      v-model="newProductType"
                      :items="filteredProductTypes"
                      label="Tipo de Producto"
                      clearable
                      @input="filterProductTypes"
                    ></v-autocomplete>
                    <v-file-input
                      v-if="selectedProduct === 'Nuevo Producto'"
                      v-model="newProductImage"
                      label="Imagen"
                      accept=".png, .jpeg, .jpg"
                    ></v-file-input>
                    <v-text-field v-model="quantity" label="Cantidad" type="number"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="closeDialog">Cancelar</v-btn>
                  <v-btn color="primary" @click="submitForm">Guardar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn @click="openDownloadDialog">Bajar</v-btn>
            <v-dialog v-model="downloadDialog" max-width="500">
              <v-card>
                <v-card-title>Descargar Producto</v-card-title>
                <v-card-text>
                  <v-form @submit.prevent="submitDownloadForm">
                    <v-select
                      v-model="selectedProductForDownload"
                      :items="combinedProducts"
                      label="Seleccionar Producto"
                      autocomplete
                    ></v-select>
                    <v-text-field v-model="quantityToDownload" label="Cantidad" type="number"></v-text-field>
                    <v-select
                      v-model="status"
                      :items="['Vendido', 'Descartado']"
                      label="Estado del Producto"
                    ></v-select>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="closeDownloadDialog">Cancelar</v-btn>
                  <v-btn color="primary" @click="submitDownloadForm">Descargar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-snackbar v-model="errorSnackbar" color="error">{{ errorMessage }}</v-snackbar>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      downloadDialog: false,
      selectedProduct: '',
      selectedProductForDownload: '',
      newProductName: '',
      newProductType: '',
      newProductImage: null,
      quantity: 0,
      quantityToDownload: 0,
      products: ['Producto 1', 'Producto 2', 'Nuevo Producto'],
      productTypes: ['Comida', 'Electrónica', 'Ropa', 'Muebles', 'Juguetes', 'Herramientas'],
      filteredProductTypes: [],
      errorSnackbar: false,
      errorMessage: '',
    };
  },
  computed: {
    combinedProducts() {
      // Combinar las opciones de productos existentes y los tipos de productos
      return [...this.products, ...this.productTypes];
    },
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    openDownloadDialog() {
      this.downloadDialog = true;
    },
    closeDownloadDialog() {
      this.downloadDialog = false;
    },
    submitForm() {
      if (this.selectedProduct === 'Nuevo Producto' && !this.isImageValid(this.newProductImage)) {
        this.errorSnackbar = true;
        this.errorMessage = 'El formato de la imagen no es válido. Debe ser PNG, JPEG o JPG.';
        return;
      }

      if (this.quantity < 0) {
        this.errorSnackbar = true;
        this.errorMessage = 'La cantidad no puede ser un número negativo.';
        return;
      }

      // Aquí puedes realizar la lógica para guardar los datos del formulario de subida
      console.log('Producto seleccionado:', this.selectedProduct);
      console.log('Nombre:', this.newProductName);
      console.log('Tipo de Producto:', this.newProductType);
      console.log('Imagen:', this.newProductImage);
      console.log('Cantidad:', this.quantity);
      this.closeDialog();
    },
    submitDownloadForm() {
      // Aquí puedes realizar la lógica para descargar productos con la cantidad especificada
      console.log('Producto seleccionado para descarga:', this.selectedProductForDownload);
      console.log('Cantidad a descargar:', -Math.abs(this.quantityToDownload)); // Convertir a número negativo
      this.closeDownloadDialog();
    },
    isImageValid(file) {
      if (!file) return false;
      const validFormats = ['image/png', 'image/jpeg', 'image/jpg'];
      return validFormats.includes(file.type);
    },
    filterProductTypes(query) {
      this.filteredProductTypes = this.productTypes.filter(type =>
        type.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
};
</script>
