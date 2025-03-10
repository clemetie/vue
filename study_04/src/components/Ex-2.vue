<script setup>
import { ref } from "vue";
//탭 목록
const tabs = ref(["회사 소개", "서비스", "연락처", "예약 방법", "예약하기"]);
const activeTab = ref(0);
</script>
<template>
  <div class="cp-box">
    <!-- 탭 버튼 -->
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        v-on:click="activeTab = index"
        :class="{ active: activeTab === index }"
      >
        {{ tab }}
      </button>
    </div>
    <!-- 탭 내용 -->
    <div class="tab-content">
      <section v-if="activeTab === 0">회사소개</section>
      <section v-if="activeTab === 1">서비스</section>
      <section v-if="activeTab === 2">연락처</section>
      <section v-if="activeTab === 3">예약방법</section>
      <section v-if="activeTab === 4">예약하기</section>
    </div>
  </div>
</template>
<style scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
button {
  flex: 1;
  padding: 12px;
  margin: 5px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}
.active {
  background-color: var(--accent-color);
}
</style>
