<template>
    <div>
      <v-toolbar
        dark
        prominent

        :image="rosado"
        
        
      >
     
        <v-app-bar-nav-icon></v-app-bar-nav-icon>  
          <v-spacer id="izquierda"></v-spacer>
            
          <img :src="esmerald" alt="logo" id="laimagen"> 
          <v-app-bar-title style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >Emerald Stockers</v-app-bar-title>
          <v-spacer id="derecha"></v-spacer>
        <v-btn icon id="iconoDerecha">
          <v-icon></v-icon>

        
        
      </v-btn>
     
        <v-app-bar-nav-icon></v-app-bar-nav-icon>        
        <img src="logo emerald stockers.png" alt="logo" id="laimagen"> 

        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-export</v-icon>

        </v-btn>
      </v-toolbar>
    </div>
  </template>
<script setup>
  import { ref } from "vue"
  
  const esmerald = ref("emerald.png")
</script>
  
  <style scoped>


  #iconoDerecha{
      background-image: url("tuerca.ico");
      background-size: cover;  
    }

#laimagen {
  
  width: 50px;
}
  </style>