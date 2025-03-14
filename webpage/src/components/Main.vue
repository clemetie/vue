<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { ref } from "vue";
// 슬라이드 이미지 데이터
const slides = ref([
  "/images/2.png?text=슬라이드+1",
  "/images/3.png?text=슬라이드+2",
  "/images/4.png?text=슬라이드+3",
]);
// 상품 데이터
const products = ref([
  { name: "상품 1", price: "10,000", image: "/images/4.png" },
  { name: "상품 2", price: "20,000", image: "/images/3.png" },
  { name: "상품 3", price: "30,000", image: "/images/2.png" },
]);
// 공지사항
const notices = ref(["공지사항 1", "공지사항 2", "공지사항 3", "공지사항 4"]);
const galleryImages = ref(["/images/2.png", "/images/3.png", "/images/4.png"]);
const activeTab = ref("notice");
</script>
<template>
  <main class="main">
    <!-- 비주얼 -->
    <section class="visual">
      <Swiper :modules="[Autoplay]" :loop="true" :autoplay="{ delay: 3000 }">
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div
            class="slide"
            s
            :style="{ backgroundImage: `url(${slide})` }"
          ></div>
        </SwiperSlide>
      </Swiper>
    </section>
    <!-- 상품 리스트 -->
    <section class="products inner">
      <h2>🎀추천 상품🎀</h2>
      <div class="product-list">
        <div class="product" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" />
          <b>{{ product.name }}</b>
          <span style="margin-left: 30px">{{ product.price }}원</span>
        </div>
      </div>
    </section>
    <!-- 공지사항&갤러리(탭버튼) -->
    <section class="tab-section inner">
      <div class="tabs">
        <button
          @click="activeTab = 'notice'"
          :class="{ active: activeTab === 'notice' }"
        >
          공지사항
        </button>
        <button
          @click="activeTab = 'gallery'"
          :class="{ active: activeTab === 'gallery' }"
        >
          갤러리
        </button>
      </div>
      <div v-if="activeTab === 'notice'" class="tab-content">
        <h2>공지사항</h2>
        <ul>
          <li v-for="(notice, index) in notices" :key="index">
            {{ index + 1 }}. {{ notice }}
          </li>
        </ul>
      </div>
      <div v-if="activeTab === 'gallery'" class="tab-content">
        <h2>갤러리</h2>
        <div class="gallery-list">
          <img
            v-for="(image, index) in galleryImages"
            :key="index"
            :src="image"
          />
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.visual {
  width: 100%;
}
.slide {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
}
.products {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-list {
  width: 90%;
  display: flex;
  padding: 20px 0;

  justify-content: center;
}
.product {
  flex: 1;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  width: 150px;
}
.product img {
  width: 100%;
}
/* 공지사항 / 갤러리 */
.tab-section {
  margin-bottom: 50px;
}
.tabs {
  margin: auto;
  text-align: center;
}

button {
  text-align: center;
  padding: 10px 20px;
  border: none;
  background: #ddd;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
}
button.active {
  background: rgb(220, 20, 97);
  color: white;
}
.gallery-list {
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
}
.gallery-list > img {
  width: calc(100% / 3);
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.tab-content {
  margin: auto;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.tab-content h2 {
  text-align: center;
  padding: 20px 0;
}
.tab-content ul {
  background: white;
  padding: 15px;
  border-radius: 5px;
  margin: auto;
}
</style>
