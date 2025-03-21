<script setup></script>
<template>
  <header>
    <nav>
      <router-link to="/"><span class="logo">BingFree</span></router-link>
      <div class="depth">
        <router-link to="/about">빙프리란</router-link>
        <router-link to="/check">요금안내</router-link>
        <router-link to="/review">고객리뷰</router-link>
        <router-link to="/reservation">예약하기</router-link>
      </div>
    </nav>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  line-height: 50px;
  padding: 20px 0;
  text-align: center;
}
header nav {
  display: flex;
  justify-content: space-around;
}
nav a {
  margin: 0 10px;
  font-weight: bold;
}
nav a:hover {
  color: #e9ff54;
}
</style>
