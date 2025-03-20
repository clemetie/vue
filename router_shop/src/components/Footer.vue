<script setup></script>
<template>
  <footer>
    <span class="logo">BingFree</span>
    <router-link to="/site">사이트맵</router-link> |
    <router-link to="/person">개인정보처리방침</router-link>
    <p>&copy; 2025 쇼핑몰</p>
  </footer>
</template>
<style scoped>
footer {
  background-color: #ccc;
  width: 100%;
  line-height: 50px;
  padding: 20px 0;
  text-align: center;
}
nav a {
  margin: 0 10px;
  font-weight: bold;
  color: #ddd;
}
nav a:hover {
  color: #e9ff54;
}

.logo {
  color: #3e3e3e;
  font-weight: bold;
  font-size: 30px;
  font-style: italic;
  float: left;
  padding: 0 60px;
}
</style>
