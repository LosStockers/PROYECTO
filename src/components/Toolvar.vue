<template>
    <div>
      <v-toolbar
        
        dark
        prominent
        image="rosado.jpeg"
        
        
      >
     
        <v-app-bar-nav-icon></v-app-bar-nav-icon>  
          <v-spacer id="izquierda"></v-spacer>
            
          <img src="logo emerald stockers.png" alt="logo" id="laimagen"> 
          <v-app-bar-title style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >Emerald Stockers</v-app-bar-title>
          <v-spacer id="derecha"></v-spacer>
        <v-btn icon id="iconoDerecha">
          <v-icon></v-icon>
        </v-btn>
      </v-toolbar>
    </div>
  </template>

  
  <style scoped>

  #iconoDerecha{
      background-image: url("solo una tuerca.ico");
      background-size: cover;  
    }
#laimagen {
  
  width: 50px;
}
#izquierda {
  width: 180px;
  height: max-content;
}
  </style>