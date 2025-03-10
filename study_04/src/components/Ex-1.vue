<script setup>
import { computed, reactive, ref } from "vue";

// 예약 카운트 즈가 및 두배 표시 기능
const reservation = ref(0);
const dbreservaiton = computed(() => {
  return reservation.value * 2;
});
const increaseReservation = () => {
  reservation.value++;
};
// 2.짐 보관 상태
const storage = reactive({
  isStored: false,
});
// 토글 버튼
const toggleStorage = () => {
  storage.isStored = !storage.isStored;
};
//3.제빙기 청소 옵션 선택 및 요금 계산
const selectiedOption = ref("basic");
const totalPrice = computed(() =>
  selectiedOption.value === "basic" ? 50000 : 100000
);

//4. 고객 정보
const customer = reactive({
  name: "hb",
  phone: "1221 - 1221",
});
const updateCustom = () => {
  (customer.name = "jh"), (customer.phone = "1006 - 1006");
};

//5. 예약 가능 수 계산하기
const maxreserv = ref(10); //최대
const currentreserv = ref(0); //현재
const remainreserv = computed(() => maxreserv.value - currentreserv.value); //잔여
const addreserv = () => {
  if (currentreserv.value < maxreserv.value) {
    currentreserv.value++;
  }
};
</script>
<template>
  <div class="wrap">
    <!-- 1. 예약 카운트 증가 및 두배 표시 -->
    <div class="ex">
      <h2>예약 관리</h2>
      <p>예약 수 : {{ reservation }}</p>
      <p>두배 예약 수: {{ dbreservaiton }}</p>
      <button @click="increaseReservation">예약 추가</button>
    </div>
    <hr />
    <!-- 2. 짐 보관 상태 -->
    <div class="ex">
      <h2>짐 보관 상태</h2>
      <p>짐보관 상태 : {{ storage.isStored ? "보관중" : "미보관" }}</p>
      <button @click="toggleStorage">짐보관 토글</button>
    </div>
    <hr />
    <!-- 3.제빙기 청소 옵션 선택 및 요금 계산 -->
    <div class="ex">
      <h2>제빙시 청소 예약</h2>
      <label>
        청소 옵션:
        <select v-model="selectiedOption">
          <option value="basic">기본 청소 (₩50,000)</option>
          <option value="deep">심층 청소 (₩100,000)</option>
        </select>
      </label>
      <p>선택한 요금 : {{ totalPrice }}원</p>
    </div>
    <hr />
    <!-- 4. 고객정보관리 -->
    <div class="ex">
      <h2>고객정보</h2>
      <p>고객이름: {{ customer.name }}</p>
      <p>phone: {{ customer.phone }}</p>
      <button v-on:click="updateCustom">Change</button>
    </div>
    <hr />
    <!-- 5. 예약 가능 수 계산하기 -->
    <div class="ex">
      <h2>예약 가능 여부</h2>
      <p>최대 예약 가능 수 : {{ maxreserv }}</p>
      <p>현재 예약 : {{ currentreserv }}</p>
      <button v-on:click="addreserv" :disabled="remainreserv < 1">
        예약 추가
      </button>
      <p>잔여 예약 가능 수 : {{ remainreserv }}</p>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  display: flex;
  gap: 20px;
}
.ex {
  flex: 1;
}
button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  background-color: #4287b9;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
