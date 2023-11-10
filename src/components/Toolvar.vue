<template>
    <div>
      <v-toolbar
        light
        prominent

        :image="rosado"
        
        
      >
     
        
 <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props" 
          
        >
          Menú
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
          <v-spacer id="izquierda"></v-spacer>
            
          <img :src="esmerald" alt="logo" id="laimagen"> 
          <v-app-bar-title style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >Emerald Stockers</v-app-bar-title>
          <v-spacer id="derecha"></v-spacer>
        <v-btn icon id="iconoDerecha">
          <v-icon></v-icon>

        
        
      </v-btn>
     
      
      
  
       
      </v-toolbar>
    </div>
  </template>
<script setup>
  
  import { inject, ref } from "vue"


  const esmerald = ref("emerald.png")
</script>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
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