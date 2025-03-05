<script setup>
import { ref } from "vue";
const show = ref(false);
const show1 = ref(false);
const isVisible = ref(false);
</script>
<template>
  <button @click="show = !show">상세 설명보기</button>
  <p v-if="show">🏍<= 짱짱맨</p>
  <br />
  <button @click="show1 = !show1">눌러바</button>
  <p v-if="show1">메롱👻</p>
  <br />
  <!-- 설명 숨기기 -->
  <button @click="isVisible = !isVisible">
    {{ isVisible ? "정인" : "바보" }}
  </button>
  <p v-show="isVisible">메롱 😛</p>
</template>
<style scoped></style>
