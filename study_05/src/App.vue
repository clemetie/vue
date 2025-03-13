<script setup>
import Event from "./components/Event.vue";
import ExArr from "./components/ExArr.vue";
import { ref } from "vue";
const showEvent = ref(false);
</script>

<template>
  <div>
    <ExArr />
    <hr />
    <button v-on:click="showEvent = !showEvent">
      {{ showEvent ? "🖤" : "💗" }}
    </button>
    <Event v-if="showEvent" />
  </div>
</template>

<style scoped>

</style>
