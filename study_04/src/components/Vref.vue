<script setup>
import { ref, reactive, computed } from "vue";

// ref로 카운트 상태 관리하기
const count = ref(2);
const increase = () => {
  count.value++;
};
const decrease = () => {
  count.value--;
};

//reactive() <= 객체 반응형
//reactive로 user 객체 관리
const user = reactive({
  name: "빈",
});
const Togglename = () => {
  user.name = user.name === "빈" ? "null" : "빈";
};

// computed() 로 count 2배 만들기
const dbcount = computed(() => count.value * 2);

// <!-- computed()로 계산하기 -->
const price1 = ref(10000);
const quantity1 = ref(3);
const total1 = computed(() => price1.value * quantity1.value);
const a = ref(false);

// 선생님 예제(computed 계산하기)
//ex_01
const price = ref(100);
const quantity = ref(2);
const totalPrice = computed(() => price.value * quantity.value);
</script>
<template>
  <!-- ref로 카운트 상태 관리하기 -->
  <button @click="increase">+</button>
  <span> {{ count }} </span>
  <button @click="decrease">-</button>
  <hr />

  <!-- reactive로 user 객체 관리 -->
  <p>USER NAME : {{ user.name }}</p>
  <button @click="Togglename">🎅</button>
  <hr />

  <!--  computed() 로 count 2배 만들기 -->
  <span>{{ dbcount }}</span>
  <button @click="dbcount">*2</button>
  <hr />

  <!-- computed()로 계산하기 -->
  <span>{{ price1 }} * {{ quantity1 }}</span>
  <button @click="a = !a">계산하기</button>
  <span v-if="a">= {{ total1 }}</span>
  <hr />
  <h2>computed로 계산</h2>
  <div class="computed">
    <div class="ex01">
      <p>가격: {{ price }}원</p>
      <p>수량: {{ quantity }}개</p>
      <p>총 가격: {{ totalPrice }}원</p>
    </div>
    <div class="ex02">
      <span>가격 : {{ price }}원</span>
      <button v-on:click="quantity += 1">+</button>
      <span>{{ quantity }}</span>
      <button v-on:click="quantity -= 1" :disabled="quantity <= 1">-</button>
      <p>총 : {{ totalPrice }}원</p>
    </div>
  </div>
</template>
<style scoped>
span {
  padding: 0 10px;
}
.computed {
  width: 1000px;
  display: flex;
  gap: 20px;
}
.computed div {
  flex: 1;
  background-color: pink;
}
</style>
