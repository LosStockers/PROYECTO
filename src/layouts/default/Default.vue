<template>
    <v-app>
        <Toolvar/>
        <RouterView/>
        <Drawer/>
        
    </v-app>
    <Drawer/>
    <Footer/>
</template>

<script setup>
   import Footer from '@/components/Footer'
import Toolvar from '@/components/Toolvar.vue'
import Drawer from '@/components/Toolvar.vue'
import { provide, ref } from 'vue'
const drawer = ref(false)
provide("drawer",drawer)
</script>
