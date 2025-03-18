<script setup>
import { ref } from "vue";

const favoriteColor = ref("");
const agree = ref(false);
const selectedFruit = ref([]);
const selectedCity = ref("");
const selectedHobbies = ref([]);
</script>
<template>
  <div class="container">
    <div class="radio-group">
      <p>🎨 좋아하는 색상을 선택하세요:</p>
      <label class="radio-label">
        <input type="radio" v-model="favoriteColor" value="주황색" />
        <span class="custom-radio"></span>
        🧡
      </label>
      <label class="radio-label">
        <input type="radio" v-model="favoriteColor" value="노랑색" />
        <span class="custom-radio"></span>
        💛
      </label>
      <label class="radio-label">
        <input type="radio" v-model="favoriteColor" value="초록색" />
        <span class="custom-radio"></span>
        💚
      </label>
      <label class="radio-label">
        <input type="radio" v-model="favoriteColor" value="파랑색" />
        <span class="custom-radio"></span>
        💙
      </label>
      <p>
        ✅ 선택한 색상: <strong>{{ favoriteColor }}</strong>
      </p>
    </div>
    <!-- 체크박스값 바인딩 -->
    <div class="check-group">
      <!-- 1. 단일 체크박스 (불리언값) -->
      <h4>1. 단일 체크박스 (불리언값)</h4>
      <label>
        <input v-model="agree" type="checkbox" />
        동의합니다.
      </label>
      <p>동의 여부 : {{ agree ? "동의" : "동의 안 했음" }}</p>
      <hr />
      <!-- 2. 여러 체크박스 (배열)  -->
      <h4>2. 여러 체크박스 (배열)</h4>
      <div class="checkbox-group">
        <p>🥝🍊🍈🍑🍒</p>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedFruit" value="키위" />
          <span class="custom-checkbox"></span>
          🥝
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedFruit" value="오렌지" />
          <span class="custom-checkbox"></span>
          🍊
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedFruit" value="메론" />
          <span class="custom-checkbox"></span>
          🍈
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedFruit" value="복숭아" />
          <span class="custom-checkbox"></span>
          🍑
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedFruit" value="체리" />
          <span class="custom-checkbox"></span>
          🍒
        </label>
        <p>
          <strong> {{ selectedFruit }} </strong>좋아
        </p>
      </div>
    </div>
    <!-- 셀렉트 박스 값 바인딩 -->
    <div class="select-group">
      <!-- 1. 단일 선택 -->
      <h4>1. 단일 선택</h4>
      <div class="selected-group">
        <p>🏙 도시를 선택하세요:</p>
        <select v-model="selectedCity" class="custom-select">
          <option value="" disabled>도시 선택</option>
          <option value="서울">서울</option>
          <option value="대전">대전</option>
          <option value="대구">대구</option>
          <option value="부산">부산</option>
        </select>
        <p>
          <strong>{{ selectedCity }}</strong
          >가자
        </p>
      </div>
      <hr />
      <!-- 2. 다중 선택 -->
      <h4>2. 다중 선택</h4>
      <p>취미를 선택하세요 (Ctrl/Shift 키로 복수 선택 가능):</p>
      <select v-model="selectedHobbies" class="custom-select" multiple>
        <option value="독서">독서</option>
        <option value="운동">운동</option>
        <option value="게임">게임</option>
        <option value="여행">여행</option>
        <option value="영화 시청">영화 시청</option>
      </select>
      <p>
        <strong>{{ selectedHobbies }}</strong
        >중 ~
      </p>
    </div>
  </div>
</template>
<style scoped>
.radio-group,
.check-group,
.select-group {
  margin: 5px 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.radio-label,
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px 0;
}
.radio-label input,
.checkbox-label input {
  display: none;
}

.custom-radio {
  width: 10px;
  height: 10px;
  border: 2px solid gray;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}
.custom-checkbox {
  width: 15px;
  height: 15px;
  border: 2px solid gray;
  display: inline-block;
  position: relative;
}
.radio-label input:checked + .custom-radio,
.checkbox-label input:checked + .custom-checkbox {
  border-color: pink;
  background-color: pink;
  position: relative;
}
.checkbox-label input:checked + .custom-checkbox::after {
  content: "✔";
  color: crimson;
  position: absolute;
  top: -10px;
}
.custom-select {
  padding: 2px 10px;
  font-size: 14px;
  border: 2px solid gray;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}
.custom-select:focus {
  border: 2px solid #333;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}
</style>
