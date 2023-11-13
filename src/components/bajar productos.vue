<template>
    <v-app>
      {{ filteredProductTypes }}
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="6">
              
  
              
              <v-btn @click="openDialogSalida">Bajar</v-btn>
              <v-dialog v-model="dialogSalida" max-width="500">
                <v-card>
                  <v-card-title>Descargar Producto</v-card-title>
                  <v-card-text>
                    <v-form @submit.prevent="submitDownloadForm">
                      <v-select
                        v-model="selectedProductForDownload"
                        :items="productTypes"
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
  
  
  
  <script setup>
  import { computed, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const dialogEntrada = ref(false)
  const dialogSalida = ref(false)
  const selectedProduct = ref("")
  const selectedProductForDownload = ref("")
  const newProductName = ref("")
  const newProductType = ref([])
  const newProductImage = ref(null)
  const quantity = ref(0)
  const quantityToDownload = ref(0)
  const productTypes = ref(['Comida', 'Electrónica', 'Ropa', 'Muebles', 'Juguetes', 'Herramientas'])
  const filteredProductTypes = ref([])
  const errorSnackbar = ref(false)
  const errorMessage = ref("")
  const status = ref("")
  
  const tipos = async() => {
    await fetch("http://localhost/api/Traertipos.php")
    .then(respuesta => respuesta.json())  
    .then(datos => filteredProductTypes.value=datos)        
  }
  
  tipos()
  
  
  
  
     const openDialogEntrada=()=> {
        dialogEntrada.value = true;
      }
    const  closeDialog=()=> {
        dialogEntrada.value = false
      }
     const openDialogSalida=()=> {
        dialogSalida.value = true;
      }
      const closeDownloadDialog=()=> {
      dialogSalida.value = false;
      }
      const submitForm=()=> {
        if (selectedProduct.value === 'Nuevo Producto') {
          console.log(newProductImage.value[0].type)
          if (!(isImageValid.value(newProductImage.value[0]))) {
            
            errorSnackbar.value = true;
            errorMessage.value = 'El formato de la imagen no es válido. Debe ser PNG, JPEG o JPG.';
              
          }
          
        }
      
  
        if (quantity.value < 0) {
          errorSnackbar.value = true;
          errorMessage.value = 'La cantidad no puede ser un número negativo.';
          
        }
  
        // Aquí puedes realizar la lógica para guardar los datos del formulario de subida
        console.log('Producto seleccionado:', selectedProduct.value);
        console.log('Nombre:', newProductName.value);
        console.log('Tipo de Producto:', newProductType.value);
        console.log('Imagen:', newProductImage.value);
        console.log('Cantidad:', quantity.value);
        closeDialog();
      },
      submitDownloadForm=()=> {
        // Aquí puedes realizar la lógica para descargar productos con la cantidad especificada
        console.log('Producto seleccionado para descarga:', selectedProductForDownload.value);
        console.log('Cantidad a descargar:', -Math.abs(quantityToDownload.value)); // Convertir a número negativo
        console.log('Estado del Producto:', status.value);
        closeDownloadDialog();
      },
  
      isImageValid=(file)=> {
      if (!file) return false;
      const validFormats = ['image/png', 'image/jpeg','image/jpg'];
      console.log(":(" + file.name)
      return validFormats.includes(file.type);
      },
      filterProductTypes=(query)=> {
        filteredProductTypes.value = productTypes.value.filter(type =>
          type.toLowerCase().includes(query.toLowerCase())
        );
      }
    
  
  </script>
  