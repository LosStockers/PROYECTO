<template>

  <div class="izqF">
    <v-form id="SubirProdF" class="SubirProd">
     <v-card class="cardProd">

        <v-col>
          <v-text-field
            label="Nombre"
            required 
            placeholder="Fabuloso"
            type="text"
            v-model="NombreForm"
            class="Formulario"
            id="Nombre"
          ></v-text-field>

        </v-col>

        <v-col col="12">
          <v-text-field
            label="Stock"
            placeholder="56u"
            type="int"
            v-model="FormStock"
            class="Formulario"
            id="Stock"
          ></v-text-field>
        </v-col>

        <v-col col="12" >
          <v-autocomplete
            label="Categoria"
            v-model="FormCateg"
            :items="['Tecnologia', 'Alimentos', 'Bebida', 
                'Ropa y moda', 'Congelados', 'Enlatados', 
                'Electricos', 'Limpieza', 'Jugetes', 'Libros', 
                'Plantas y jardin', 'Decoracion', 'Productos salud', 
                'Otros']"
                class="Formulario"
            id="Categoria"
          ></v-autocomplete>
        </v-col>



        <v-card class="Botonera">
          <v-col
          cols="12"
          >
          <v-btn @Click="enviarDatos()" class="Botones">Subir</v-btn>
          
          <v-btn @Click="conectarDB()" class="Botones">Cancelar</v-btn>
         </v-col> 
        </v-card> 

    </v-card>
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

<style scoped>
  body,
  html {
    height: 100%;
    width: 100%;
    padding: 0%;
    margin: 0;
  }


  .SubirProd {
    
    margin-left: 2%;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(186, 186, 255);
  }
  .cardProd {
    width: 96%;
    height: 94%;
    margin: 2%;
    top: 2%;
    bottom: 2%;
    
  }
 
  .izqF{
    position: relative;
    float: left;
    width: 45%;
  }

  .derP{
    position: absolute;
    right: 45px;
    top: 300px;
    width: 45%;
    
    background-color: rgb(186, 186, 255)
  }

  #IMGmos{
    margin: 5%;
    float: left ;
    height: 150px;
    width: 150px;
  }
img {
    border-style: none;
    width: 150px;
}


  .Botones {
    margin-bottom: 3%;
  }
  .Botonera{
    text-align: center;
    left: 10%;
    width:80%;
    justify-content: center;
  }
  


</style>



<script setup>
import { ref } from 'vue'


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