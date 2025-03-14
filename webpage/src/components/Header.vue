<script setup></script>
<template>
  <header class="header">
    <div class="inner">
      <!-- 로고 -->
      <div class="logo">🍭</div>
      <!-- 내비게이션 -->
      <nav class="nav">
        <ul>
          <li class="menu-item">
            <a href="#">메뉴1</a>
            <ul class="submenu">
              <li><a href="#">서브메뉴 1-1</a></li>
              <li><a href="#">서브메뉴 1-2</a></li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#">메뉴2</a>
            <ul class="submenu">
              <li><a href="#">서브메뉴 2-1</a></li>
              <li><a href="#">서브메뉴 2-2</a></li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#">메뉴3</a>
            <ul class="submenu">
              <li><a href="#">서브메뉴 3-1</a></li>
              <li><a href="#">서브메뉴 3-2</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- 로그인 / 회원가입 -->
      <div class="auth">
        <button class="login">로그인</button>
        <button class="signup">회원가입</button>
      </div>
    </div>
  </header>
</template>
<style scoped>
.header {
  background-color: #e195b7;
}
.header .inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 15px 20px;
  z-index: 2;
}
/* 로고 */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
}
/* 네비게이션 */
.nav > ul {
  display: flex;
  gap: 20px;
}
.nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  display: block;
}
.menu-item {
  position: relative;
}
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  padding: 10px 0;
  min-width: 120px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease-in-out;
  z-index: 99;
}
.submenu a {
  color: #333;
  padding: 8px 15px;
  display: block;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.submenu a:hover {
  background-color: #e5e4e4;
}
.menu-item:hover .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
/* 로그인 & 회원가입 버튼 */
.auth button {
  background: white;
  border: none;
  padding: 8px 12px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

.auth .login {
  color: rgb(220, 20, 97);
}

.auth .signup {
  background: rgb(220, 20, 97);
  color: white;
}
</style>
