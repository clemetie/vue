<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const products = ref([
  {
    id: 1,
    name: "상품1",
    price: "399,900원",
    image: "/public/images/product1.png",
  },
  {
    id: 2,
    name: "상품2",
    price: "299,900원",
    image: "/public/images/product2.png",
  },
  {
    id: 3,
    name: "상품3",
    price: "199,900원",
    image: "/public/images/product3.png",
  },
  {
    id: 4,
    name: "상품4",
    price: "499,900원",
    image: "/public/images/product4.png",
  },
]);
const router = useRouter();
const goToDetail = (id) => {
//   console.log(id);
  router.push(`/product/${id}`);
};
</script>
<template>
  <div>
    <h3 style="color: #1465da; padding: 20px 0">상품 목록</h3>
    <div class="product-list">
      <div class="product" v-for="product in products" :key="product.id">
        <img
          :src="product.image"
          :alt="product.name"
          v-on:click="goToDetail(product.id)"
        />
        <p style="font-weight: bold; color: #1465da">
          상품명: {{ product.name }}
        </p>
        <p>가격: {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-list {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.product {
  cursor: pointer;
  text-align: center;
  padding: 40px 0;
}
.product img {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}
.product p {
  text-align: left;
}
</style>
