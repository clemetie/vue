<script setup>
import { ref } from "vue";
const products = ["아이폰😛", "갤럭시🎇", "츄파츕스개코젤리🥱"];
const cart = ref([]);
const addToCart = (product) => {
  cart.value.push(product);
};
</script>
<template>
  <h4>상품 목록</h4>
  <ol>
    <li v-for="product in products" ::key="product">{{ product }} <button @click="addToCart(product)">🛒</button></li>
  </ol>
  <h4>장바구니</h4>
  <ol>
    <li v-for="item in cart" ::key="item">{{ item }}</li>
  </ol>
</template>
<style scoped></style>
