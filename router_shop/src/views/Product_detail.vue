<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
// useRouter() <= route를 변경할 때 쓴다. (push(), replace(), go())
// useRoute()<= 정보를 가져옴 (params, query, path, name 등 . .)

// 찜하기
const liked = ref(false);
// 찜하기 버튼 기능 함수
const toggleLike = () => {
  liked.value = !liked.value;
};
// 구매하기
const showModal = ref(false);

const goBack = () => {
  router.push("/");
};

const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 389900,
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
    price: 289900,
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
    price: 189900,
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
    price: 489900,
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

// 선택된 이미지 가져오기
const selectedImg = ref(product.value.images ? product.value.images[0] : "");

// 가격 포맷 함수 => ','000
const formatprice = (price) => {
  console.log(price);
  return `${price.toLocaleString()}`;
};
// 수량 및 상태 관리
// 수량 상태 변수
const quantity = ref(1);
// console.log(quantity.value);

const changequantity = (amount) => {
  // if (quantity.value + amount > 0 && quantity.value + amount <= 5)
  // {quantity.value += amount;} <= 선생님 코드 만약에 값이 0보다 크고 5보다 작거나 같으면 계산하기
  // quantity.value += amount; <= 얘는 1밑으로 계속 내려감
  quantity.value = Math.max(1, Math.min(5, quantity.value + amount)); // <= 1밑으로 안 내려가려면 Math써서 max를 1로 설정 , +=를 하면 quantity에 계산된 값을 저장함 +만하면 보이는 거만 바뀌고 quantity는 계속 1로 되어있음
};
// 총 금액(상품 가격 * 수량)
const totalPrice = computed(() => {
  return (product.value.price * quantity.value).toLocaleString();
});

//모달에서 확인 버튼 누르면
const confirmBtn = () => {
  alert(`${product.value.name} ${quantity.value}개 구매 완 - 🥰`);
};
</script>
<template>
  <button v-on:click="goBack">뒤로가기</button>
  <div class="product-container">
    <!-- 이미지 -->
    <div class="imgBox">
      <img :src="selectedImg" class="mainImg" />
      <!-- 썸네일 -->
      <div class="thumbnails">
        <img
          v-for="(img, index) in product.images"
          :key="index"
          :src="img"
          class="thumb"
          v-on:click="selectedImg = img"
        />
        <!-- 이미 product로 객체 가져왔으니까 for문에서 product써도 됨 -->
      </div>
    </div>
    <!-- 설명 -->
    <div class="txtBox">
      <h2>{{ product.name }}</h2>
      <p class="price">
        가격:
        <strong style="font-size: 18px; color: #1465da"
          >{{ formatprice(product.price) }}원</strong
        >
      </p>
      <p class="description" style="color: gray">{{ product.description }}</p>
      <!-- 수량선택 -->
      <div class="quantity">
        <button v-on:click="changequantity(-1)"><span>-</span></button>
        <input type="number" v-model="quantity" min="1" max="5" />
        <button v-on:click="changequantity(1)"><span>+</span></button>
      </div>
      <b class="totalPrice" style="color: #1465da; font-size: 20px"
        >총 금액: {{ totalPrice }}원</b
      >
      <div class="btns">
        <button class="like" v-on:click="toggleLike" style="margin-right: 10px">
          {{ liked ? "💙 취소" : "🤍 담기" }}
        </button>
        <button
          class="buy"
          style="
            background-color: #1465da;
            border-color: #1465da;
            color: aliceblue;
          "
          v-on:click="showModal = true"
        >
          구매하기
        </button>
      </div>
    </div>
  </div>
  <!-- 구매하기 버튼 클릭시에 나올 모달 -->
  <div v-if="showModal" class="modalOverlay" v-on:click="showModal = false">
    <div class="modalContent" style="text-align: center">
      <h3>구매 완료 💙</h3>
      <strong>{{ product.name }},{{ quantity }}개!</strong>
      <b class="totalPrice" style="color: #1465da; font-size: 18px"
        >총 금액: {{ totalPrice }}원</b
      >
      <div class="btns" style="text-align: center">
        <button style="margin-right: 10px" v-on:click="showModal = false">
          취소
        </button>
        <button
          style="
            background-color: #1465da;
            border-color: #1465da;
            color: aliceblue;
          "
          v-on:click="confirmBtn"
        >
          확인
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
button {
  width: fit-content;
  margin: 10px 0;
  padding: 3px 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
}
button:hover {
  filter: brightness(0.8);
  cursor: pointer;
}
input {
  margin: 10px 2px;
  padding: 3px 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  text-align: center;
  color: #222;
}
.product-container {
  max-width: 800px;
  display: flex;
  margin: 20px auto;
  gap: 50px;
  padding: 20px 0;
}
.imgbox {
  flex: 1;
}
.mainImg {
  width: 240px;
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  filter: brightness(1.2);
}
.thumbnails {
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.thumb {
  width: 50px;
  border-radius: 10px;
  cursor: pointer;
}
/* 상품 설명 */
.txtBox {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
/* 모달 꾸미기 */
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.modalContent {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  border-radius: 30px;
  padding: 1.5% 5%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.243);
}
</style>
