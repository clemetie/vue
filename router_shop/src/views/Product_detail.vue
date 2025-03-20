<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
// useRouter() <= route를 변경할 때 쓴다. (push(), replace(), go())
// useRoute()<= 정보를 가져옴 (params, query, path, name 등 . .)
const goBack = () => {
  router.push("/");
};

const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    description: "A 상품 설명",
    image: "/images/product1.png",
    images: [
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    description: "B 상품 설명",
    image: "/images/product2.png",
    images: [
      "/images/product2.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    description: "C 상품 설명",
    image: "/images/product3.png",
    images: [
      "/images/product3.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    description: "D 상품 설명",
    image: "/images/product4.png",
    images: [
      "/images/product4.png",
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
    ],
  },
]);
// 현재 선택된 상품 가져오기
const product = computed(() => {
  return products.value.find((p) => p.id == route.params.id) || {};
});

// 선택된 이미지 가져오기가 뭔 소리임
const selectedImg = ref(product.value.images ? product.value.images[0] : "");
</script>
<template>
  <button v-on:click="goBack">←</button>
  <div class="product-container">
    <!-- 이미지 -->
    <div class="imgBox">
      <img :src="selectedImg" class="mainImg" />
    </div>
    <!-- 설명 -->
    <div class="txtBox"></div>
  </div>
</template>
<style scoped></style>
