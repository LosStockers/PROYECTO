<template>
    <div class="todo">
        <v-img aspect-ratio="16/9"  height="200"  :src="logo" class="logo"></v-img>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router"

const logo = ref("Estock normal.png")
</script>


<style scoped>
.todo{
 width: 100%;
 height: 80%;
 top: 0%;
 left: 0%;
}

.logo{
    top: 30%;
    right: 20%;

}
</style>