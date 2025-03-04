<script setup>
import { ref } from "vue";
const count = ref(0);
const changeColor = () => {
  document.body.classList.toggle("active");
};
</script>
<template>
  <div>
    <button @click="changeColor">호이👼</button>
  </div>
</template>
<style>
body.active {
  background-color: pink;
}
</style>
