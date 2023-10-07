<template>
    <v-app>
        <Toolvar/>
        <RouterView/>
        <Footer/>
    </v-app>
</template>

<script setup>
   import Footer from '@/components/Footer'
import Toolvar from '@/components/Toolvar.vue';
</script>
