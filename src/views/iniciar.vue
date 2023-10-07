<template >
 <span>
      <v-img aspect-ratio="16/9" cover src="\src\components\arbol.jpg">
      <v-row justify="center" >
        <v-card
          style="
          position: absolute;
          top: 40px;
          opacity: 0.9;"
          width="1024"
         >
          <v-card>
            <v-card-title class="Titulito">
              <span  class="text-h5">Iniciar Sesión</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      label="Nombre"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      label="Apellido"
            
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Contraseña"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                 
                  <v-col cols="12">
                    <v-text-field
                      label="Repetir contraseña"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-img src="/src/components/SetaSolarHD.ico"></v-img>
                   
                  <v-btn prepend-icon="$vuetify">Iniciar Sesión</v-btn>
                  <v-btn prepend-icon="$vuetify">Crear Cuenta</v-btn>
             
  
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-card>
      </v-row>
    </v-img>
    </span>
  
    </template>

    <script setup>
    import { RouterLink } from 'vue-router';
    </script>