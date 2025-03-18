<script setup>
import { onMounted, ref } from "vue";

// 상태 변수 선언
const txt = ref("로딩 중 💱");
const reservations = ref([]); // reservations 변수 선언
const cartItems = ref([]);
const newItem = ref("");

// 예약 데이터 fetch 함수
const fetchReservations = async () => {
  reservations.value = [
    { id: 1, name: "김철수", date: "2025-03-20", time: "14:00" },
    { id: 2, name: "이영희", date: "2025-03-22", time: "10:30" },
  ];
};

// 컴포넌트 마운트 후 실행
onMounted(() => {
  txt.value = "로딩 됨➰";
  fetchReservations(); // 예약 목록 가져오기
  const savedCart = localStorage.getItem("cart"); //장바구니
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart);
  }
  //   다크모드 전환
  isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
});
// 장바구니에 저장하는 함수
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cartItems.value));
};
// 버튼 눌렀을 때 장바구니에 상품 추가하는 함수
const addToCart = () => {
  if (newItem.value.trim() !== "") {
    cartItems.value.push(newItem.value);
    saveCart(); // 로컬스토리지에 저장
    newItem.value = ""; // 입력 필드 초기화
  }
};
// 장바구니에서 삭제하기
const deleteItem = (index) => {
  if (confirm("삭제?")) {
    cartItems.value.splice(index, 1);
    saveCart();
  }
};

// 다크 모드 상태
const isDarkMode = ref(false);

// 다크 모드 토글 함수
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

// 스크롤 탑 기능
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="container" :class="{ dark: isDarkMode }">
    <h3>💖 onMounted() 예제</h3>
    <br />
    <h4>컴포넌트 마운트</h4>
    <p>{{ txt }}</p>
    <hr />
    <div class="reservation">
      <h4>예약 목록</h4>
      <ul>
        <!-- 예약 목록 출력 -->
        <li v-for="res in reservations" :key="res.id">
          {{ res.id }}. {{ res.name }} - {{ res.date }}({{ res.time }})
        </li>
      </ul>
    </div>
    <hr />
    <div class="cart">
      <h4>장바구니</h4>
      <div class="cart-btn">
        <input v-model="newItem" placeholder="상품 이름 입력" />
        <button v-on:click="addToCart">🛒</button>
      </div>
      <ul v-if="cartItems.length">
        <li v-for="(item, index) in cartItems" :key="index">
          {{ index + 1 }}. {{ item }}
          <button
            style="border: none; background-color: #fff"
            v-on:click="deleteItem(index)"
          >
            x
          </button>
        </li>
      </ul>
      <b v-else style="color: #aaa"> 장바구니 비었다 💦</b>
    </div>
    <hr />
    <!-- 다크모드 전환 -->
    <div class="darkMode">
      <p>현재모드 : {{ isDarkMode ? "🖤" : "💛" }}</p>
      <button @click="toggleDarkMode">
        {{ isDarkMode ? "💛" : "🖤" }}
      </button>
    </div>
    <button
      style="border: none; background-color: #fff"
      v-on:click="scrollToTop"
      class="topBtn"
    >
      🔺
    </button>
  </div>
</template>

<style scoped>
/* 스타일은 필요에 따라 추가 */
.dark {
  background-color: #333;
  color: #fff;
}
input {
  width: 60%;
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}
.cart-btn {
  margin: 10px 0;
}
.topBtn {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 30px;
}
</style>
