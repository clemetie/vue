<script setup>
import { ref } from "vue";
const items = ref(["Apple", "Banana", "Cherry", "Orange", "Grapes"]);
//push() <=추가
const additem = () => {
  items.value.push("plum");
};
//pop() <=마지막 제거
const removeLastitem = () => {
  items.value.pop(); // 배열의 마지막 제거
};
// shift() <=첫 번째 제거
const removeFirstItem = () => {
  items.value.shift();
};
//UNSHIFT() <= 첫 번째 추가
const addFirstItem = () => {
  items.value.unshift("mango");
};
//splice() - 요소 변경
const removeAndAddItem = () => {
  items.value.splice(1, 1, "kiwi");
};
//sort() - 정렬

const sortItems = () => {
  items.value.sort();
};
// reverse() <= 역순으로 정렬
const reverseItems = () => {
  items.value.reverse();
};
// filter() <= "a"가 포함된 요소만
const filterItems = () => {
  items.value = items.value.filter((item) => item.includes("a"));
};

//concat() - 새로운 배열과 결합
const concatItems = () => {
  items.value = items.value.concat(["strawberry", "blueberry"]);
};

//slice() - 인덱스 1~2 요소 추출
const sliceItems = () => {
  items.value = items.value.slice(1, 3); // (남음, 부터 다 삭제) 삭제되는 거 0,3,4 
};
</script>
<template>
  <div class="wrap-array">
    <h2>🔧배열 조작 예제</h2>
    <p>현재 배열 : {{ items }}</p>
    <button v-on:click="additem">PUSH( ) - 추가</button>
    <button v-on:click="removeLastitem">POP( ) - 마지막 제거</button>
    <button @click="removeFirstItem">SHIFT() - 첫 번째 제거</button>
    <button @click="addFirstItem">UNSHIFT() - 첫 번째 추가</button>
    <button @click="removeAndAddItem">splice() - 요소 변경</button>
    <button @click="sortItems">sort() - 정렬</button>
    <button @click="reverseItems">reverse() - 역순 정렬</button>
    <button @click="filterItems">filter() - 'a' 포함된 요소만</button>
    <button @click="concatItems">concat() - 새로운 배열과 결합</button>
    <button @click="sliceItems">slice() - 인덱스 1~2 요소 추출</button>
  </div>
</template>
<style scoped>
.wrap-array {
  padding: 20px 0;
}
</style>
