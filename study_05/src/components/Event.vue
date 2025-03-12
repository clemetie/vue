<script setup>
import { ref } from "vue";
// 1. 버튼 클릭 이벤트
const count = ref(0);
// 2. 입력 이벤트
const txt = ref(""); //입력된 메세지를 저장하는 변수
// 3. 마우스 오버 이벤트
const hover = ref(false);
// 4. 키보드 이벤트
const newTxt = ref(""); // 입력된 메세지 저장
const Txts = ref([]); // 추가된 메세지 저장하는 배열
const addTxt = () => {
  if (newTxt.value) {
    Txts.value.push(newTxt.value);
    newTxt.value = "";
  }
};
// 5. 폼 제출
const userName = ref("");
const saveName = ref("");
const submitForm = () => {
  saveName.value = userName.value;
};
// 6. 더블 클릭 이벤트
const color = ref("lightblue");
const toggleColor = () => {
  color.value = color.value === "lightblue" ? "pink" : "lightblue";
};
// 7. 마우스 위치 추적
const x = ref(0);
const y = ref(0);
const updatePosition = (event) => {
  x.value = event.clientX;
  y.value = event.clientY;
};
// 8. 체크박스
const checked = ref(false);
// 9. 컨텍스트 메뉴
const menuVisible = ref(false);
const menuX = ref(0);
const menuY = ref(0);
const showMenu = (event) => {
  event.preventDefault();
  menuX.value = event.pageX; // X 좌표 저장
  menuY.value = event.pageY; // Y 좌표 저장
  menuVisible.value = true;
};
const selectOption = (option) => {
  alert(`${option} 선택함`);
  menuVisible.value = false;
};
</script>
<template>
  <div class="container">
    <!-- 1. 버튼 클릭 이벤트 -->
    <h2>1. 클릭 이벤트</h2>
    <button v-on:click="count++">클릭 {{ count }} 번</button>
    <hr />
    <!-- 2. 입력 이벤트 -->
    <h2>2. 입력 이벤트</h2>
    <input type="text" placeholder="입력" v-model="txt" />
    <p>: {{ txt }}</p>
    <hr />
    <!-- 3. 마우스 오버 이벤트 -->
    <h2>3. 마우스 오버 이벤트</h2>
    <button
      v-on:mouseover="hover = true"
      v-on:mouseleave="hover = false"
      :style="{
        backgroundColor: hover ? 'pink' : '#fff',
      }"
    >
      마우스
    </button>
    <hr />
    <!-- 4. 키보드 이벤트 -->
    <h2>4. 키보드 이벤트</h2>
    <input
      type="text"
      v-model="newTxt"
      @keyup.enter="addTxt"
      placeholder="Enter"
    />
    <ul>
      <li v-for="txt in Txts" :key="txt">{{ txt }}</li>
    </ul>
    <hr />
    <!-- 5. 폼 제출 : 폼 제출 시 유저 정보를 변수에 저장하고 경고까지 . . -->
    <h2>5. 폼 제출</h2>
    <form @submit.prevent="submitForm">
      <input type="text" placeholder="이름 입력" v-model="userName" />
      <button type="submit">제출</button>
    </form>
    <p>이름 : {{ saveName }}</p>
    <hr />
    <!-- 6. 더블 클릭 이벤트 -->
    <h2>6. 더블 클릭 이벤트</h2>
    <div
      class="box"
      :style="{ backgroundColor: color, borderColor: color }"
      v-on:dblclick="toggleColor"
    >
      더블 클릭 하세여
    </div>
    <hr />
    <!-- 7. 마우스 위치 추적 -->
    <h2>7. 마우스 위치 추적</h2>
    <div v-on:mousemove="updatePosition" class="tracker">
      X: {{ x }} , Y: {{ y }}
    </div>
    <hr />
    <!--  8. 체크박스 -->
    <h2>8. 체크박스</h2>
    <label> <input type="checkbox" v-model="checked" /> 동의 </label>
    <p>{{ checked ? "💗" : "💥" }}</p>
    <hr />
    <!-- 9. 컨텍스트 메뉴 (우클릭 메뉴) -->
    <h2>9. 컨텍스트 메뉴 (우클릭 메뉴)</h2>
    <div @contextmenu.prevent="showMenu($event)" class="box2">
      우클릭 하세여
    </div>
    <ul
      :style="{ top: menuY + 'px', left: menuX + 'px' }"
      v-if="menuVisible"
      class="context-menu"
    >
      <li v-on:click="selectOption('옵션1')">옵션 1</li>
      <li v-on:click="selectOption('옵션2')">옵션 2</li>
    </ul>
  </div>
</template>
<style scoped>
.box {
  width: 200px;
  line-height: 100px;
  border: 1px solid pink;
  text-align: center;
}
.box2 {
  width: 200px;
  line-height: 100px;
  border: 1px solid pink;
  text-align: center;
  position: relative;
}
/* 마우스 위치 추적 박스 */
.tracker {
  width: 100%;
  height: 100px;
  border: 1px dotted pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 컨텍스트 메뉴 */
.context-menu {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 5px;
}
.context-menu li {
  padding: 5px;
  cursor: pointer;
}
.context-menu li:hover {
  background-color: antiquewhite;
}
</style>
