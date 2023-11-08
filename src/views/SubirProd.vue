<template>
  <v-dialog width="500">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Subir" width="100" height="50"> </v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
            <v-container>
              <v-row>
               
          
                <v-col
                  :cols="coso.columnas"
                  :sm="coso.sm"
                  v-for="(coso , index) in cosos"
                  :key="index"
                >
               
                <v-text-field
            :v-model="coso.nombre"
            :type="coso.type"
            :label="coso.label"
            required
            hide-details
          ></v-text-field>
          </v-col>

          
              </v-row>
            </v-container>
        cosotroco, son todas iguales ¿?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
</template>

<style> 
</style>




<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
 const cosos = ref([
 {nombre:"",columnas:12,label:"Email",type:"Email", md:6, sm:12,},
 {nombre:"",columnas:12,label:"contraseña",type:"password", md:6, sm:12,},
 

 ])













  const NombreForm = ref("")
  const FormStock = ref("")
  const FormCateg = ref("")
  const FormTamaño = ref("")

  




  function enviarDatos() {
    const inputNombre = document.getElementById("Nombre").value;
    const inputStock = document.getElementById("Stock").value;
    const inputCategoria = document.getElementById("Categoria").value;
    const inputTamaño = document.getElementById("Tamaño").value;
  
    // Check if the inputNombre field is empty
    if(inputNombre === '') {
        alert('El campo nombre es obligatorio');
        return;
    }

    // Create a FormData object
    let datos = new FormData();
  
    // Append the data to the FormData object
    datos.append("inputNombre", inputNombre);
    datos.append("inputStock", inputStock);
    datos.append("inputCategoria", FormCateg.value);
    datos.append("inputTamaño", inputTamaño);
  
    fetch("http://localhost/api/subirprod.php", {
      method: "POST",
      body: datos
    });
}

  

//recoje datos en php v
//$datos = file_get_contents('php://input');

</script>