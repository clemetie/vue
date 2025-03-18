<script setup>
import { onMounted, ref } from "vue";

const currentPage = ref("");
// 예약 목록을 저장하는 배열
const reservations = ref([]);
// 예약 정보를 저장하는 객체(초기값 설정)
const reservation = ref({
  name: "", // 예약자 이름
  email: "", // 예약자 이메일
  date: "", // 예약 날짜
  guest: 1, // 예약 인원 (초기값 1명)
  request: "", // 요청사항
  agree: false, // 약관 동의 여부 (초기값: false)
});

const isSubmited = ref(false);
//페이지가 로드될 떄 로컬 스토리지에 저장된 정보를 불러오는 함수
onMounted(() => {
  const savedReservations = localStorage.getItem("reservations");
  if (savedReservations) {
    reservations.value = JSON.parse(savedReservations);
    isSubmited.value = reservations.value.length > 0;
  }
});

// 예약 정보를 로컬스토리지에 저장하는 함수
const saveReservations = () => {
  localStorage.setItem("reservations", JSON.stringify(reservations.value));
};
// 예약 신청 버튼 클릭시 실행되는 함수
const submitForm = () => {
  // 예약 동의 하지 않을 시 예약 불가능
  if (!reservation.value.agree) {
    alert("약관에 동의하세요");
    return;
  }
  //새로운 예약 정보를 reservations 배열에 추가하기
  reservations.value.push({ ...reservation.value });
  // 폼 비우기
  // 폼 비우기
  reservation.value = {
    name: "",
    email: "",
    date: "",
    guest: 1,
    request: "",
    agree: false,
  };
  //로컬스토리지에 저장
  saveReservations();
  // 예약이 제출되었음을 표시
  isSubmited.value = true;
  //예약확인 페이지로 이동
  currentPage.value = "check";
};
// 예약 조회에서 예약 취소하기
const cancelReservation = (index) => {
  if (confirm("예약 취소하시겠습니까?")) {
    reservations.value.splice(index, 1);
    // 예약 정보 다시 저장
    saveReservations();
    // 남은 예약 확인해서 isSubmited 업데이트하기
    isSubmited.value = reservations.value.length > 0;
    // 모든 예약이 취소되면 처음화면으로 돌아감
    if (!isSubmited.value) {
      currentPage.value = "form";
    }
  }
};
</script>
<template>
  <div class="container">
    <div class="btns">
      <button v-on:click="currentPage = 'form'">💌 예약 신청</button>
      <button v-on:click="currentPage = 'check'">✅ 예약 조회</button>
    </div>
    <!-- 예약 신청 -->
    <div v-if="currentPage === 'form'">
      <h3>💌 예약 신청</h3>
      <form v-on:submit.prevent="submitForm">
        <label> 이&nbsp;&nbsp;&nbsp;름: </label>
        <input v-model="reservation.name" type="text" required />
        <label> 이메일: </label>
        <input v-model="reservation.email" type="email" required />
        <label> 날&nbsp;&nbsp;&nbsp;짜: </label>
        <input v-model="reservation.date" type="date" required />
        <label> 인&nbsp;&nbsp;&nbsp;원: </label>
        <select v-model="reservation.guest">
          <option v-for="n in 10" :key="n" value="1">{{ n }}명</option>
        </select>
        <label>요청사항:</label>
        <textarea v-model="reservation.request" rows="3"></textarea>
        <label class="checkbox-label">
          <input type="checkbox" id="agree" v-model="reservation.agree" />
          동의합니다
        </label>
        <div class="btns">
          <button type="submit">제출</button>
          <button class="cancel">취소</button>
        </div>
      </form>
    </div>
    <!-- 예약 조회 -->
    <div v-if="currentPage === 'check'">
      <h3>✅ 예약 조회</h3>
      <div class="reservations" v-if="reservations.length > 0">
        <div
          v-for="(res, index) in reservations"
          :key="index"
          class="reservation-card"
        >
          <p><strong> 이&nbsp;&nbsp;&nbsp;름: </strong>{{ res.name }}</p>
          <p><strong> 이메일: </strong>{{ res.email }}</p>
          <p><strong> 날&nbsp;&nbsp;&nbsp;짜: </strong>{{ res.date }}</p>
          <p><strong> 인&nbsp;&nbsp;&nbsp;원: </strong>{{ res.guest }}</p>
          <p><strong> 요청사항: </strong>{{ res.request }}</p>
          <button
            :style="{ width: '100%', display: 'block', margin: '10px auto' }"
            class="cancel"
            @click="cancelReservation(index)"
          >
            예약 취소하기
          </button>
        </div>
      </div>
      <button
        :style="{ width: '20%', display: 'block', margin: '0 auto' }"
        class="back"
        v-on:click="currentPage = 'form'"
      >
        뒤로가기
      </button>
    </div>
  </div>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
label {
  display: block;
  margin: 10px 0 5px;
}
input:not([type="checkbox"]),
select,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.cancel {
  border: 1px solid #dc3545;
  background-color: #dc3545;
}

.cancel:hover {
  background-color: #c82333;
}

.reservation-card {
  margin: 10px 0;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
}
.reservation-card p {
  margin: 5px 0;
}
.reservation-card p strong {
  color: green;
}
</style>
