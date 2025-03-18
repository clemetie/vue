<script setup>
import { ref } from "vue";
import FormEx from "./components/Form_ex.vue";
import Reservation from "./components/Reservation.vue";
import OnMounted from "./components/OnMounted.vue";
const currentPage = ref("");
const showPage = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div>
    <div class="btns">
      <button @click="showPage('FormEx')">Form 예제</button>
      <button @click="showPage('Reservation')">예약 예제</button>
      <button @click="showPage('on')">OnMounted 예제</button>
    </div>
    <FormEx v-if="currentPage === 'FormEx'" />
    <Reservation v-if="currentPage === 'Reservation'" />
    <OnMounted v-if="currentPage === 'on'" />
  </div>
</template>

<style scoped></style>
