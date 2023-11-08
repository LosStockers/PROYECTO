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
  </v-form>
</div>

<div class="derP">
        <div id="DatosMos"  style="display: block;" >
          <table style="width:100%" justify-content="center">
            <tr>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Categoria</th>
                <th>Tamaño</th>
            </tr>
            <tr>
                <td>{{ NombreForm }}</td>
                <td>{{ FormStock }}</td>
                <td>{{ FormCateg }}</td>
            </tr>
          </table>
        </div>



</div>


  
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













//Recoje los datos ingresados del formulario y los muestra en la tabla.
  const NombreForm = ref("")
  const FormStock = ref("")
  const FormCateg = ref("")
  const FormTamaño = ref("")

  



//Funcion para enviar los datos del formulario
  function enviarDatos() {

    //Recoge los datos del formulario.
    const inputNombre = document.getElementById("Nombre").value;
    const inputStock = document.getElementById("Stock").value;
    const inputCategoria = document.getElementById("Categoria").value;
    const inputTamaño = document.getElementById("Tamaño").value;
  
    //Chequea que el nombre no este vacio.
    if(inputNombre === '') {
        alert('El campo nombre es obligatorio');
        return;
    }

    //Crea una variable para los datos del formulario.
    let datos = new FormData();
  
    //Guarda los datos en la VARIABLE datos.
    datos.append("inputNombre", inputNombre);
    datos.append("inputStock", inputStock);
    datos.append("inputCategoria", FormCateg.value);
    datos.append("inputTamaño", inputTamaño);
  
    //Envia los datos a el php para subir los datos.
    fetch("http://localhost/api/subirprod.php", {
      method: "POST",
      body: datos
    });
}

  



</script>