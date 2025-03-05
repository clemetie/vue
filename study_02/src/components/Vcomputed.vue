<script setup>
import { ref, computed } from "vue";
// 사용자가 검색한 검색어를 저장하는 반응형 변수 ref 담아두고
const search = ref("");
// 아이템 목록 만들고
const items = ["아이폰", "갤럭시", "츄파츕스개코젤리🥱"];
// 검색어랑 아이템 목록 필터링 하기
const filtereditems = computed(() => {
  return items.filter((item) => item.includes(search.value));
});

//상품리스트 표시
const products = ["아이폰😛", "갤럭시🎇", "츄파츕스개코젤리🥱"];
</script>
<template>
  <h4>검색 기능</h4>
  <!-- 사용자가 입력한 검색어를 search에 넣어주기 -->
  <input v-model="search" placeholder="상품 검색해보세용" />
  <ul>
    <!-- for문으로 item 입력 받은 대로 출력하기 -->
    <li v-for="item in filtereditems" :key="item">{{ item }}</li>
  </ul>
  <h4>상품리스트</h4>
  <ul>
    <li v-for="product in products" :key="product">{{ product }}</li>
  </ul>
</template>
<style scoped></style>
