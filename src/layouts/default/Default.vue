<template>
    <v-app>
        <Toolvar/>
        
        <RouterView/>
            
    </v-app>
    
    <Footer/>
    
</template>

<script setup>
   import Footer from '@/components/Footer'
import Toolvar from '@/components/Toolvar.vue'
import { provide, ref } from 'vue'
const drawer = ref(false)
</script>