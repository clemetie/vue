<script setup>
import { ref } from "vue";
// 할 일 목록 데이터
const Todos = ref([
  { id: 1, name: "Vue 공부하기", isComplete: false },
  { id: 2, name: "운동하기", isComplete: true },
  { id: 3, name: "책 읽기", isComplete: false },
]);
//할 일 추가
const newTodo = ref("");
const addTodo = () => {
  if (newTodo.value.trim()) {
    Todos.value.push({ id: Date(), name: newTodo.value, isComplete: false });
  }
  newTodo.value = "";
};
// 할 일 완료/미완료 토글
const toggleComplete = (todo) => {
  todo.isComplete = !todo.isComplete;
};
//삭제
const deleteList = () => {
  Todos.value = Todos.value.filter((todo) => !todo.isComplete);
};
</script>
<template>
  <div class="wrap-todo">
    <h2>📝To Do List</h2>
    <!-- 할 일 없음 💢 -->
    <div class="input-group">
      <input placeholder="할 일 적지마세여." v-model="newTodo" /><button
        v-on:click="addTodo"
      >
        😛
      </button>
    </div>
    <!-- 진행 중 -->
    <h4>🤔 진행 중</h4>
    <ul>
      <template v-for="todo in Todos" :key="todo">
        <li v-if="!todo.isComplete">
          <input type="checkbox" v-on:change="toggleComplete(todo)" />
          {{ todo.name }}
        </li>
      </template>
    </ul>
    
    <!-- 끝 -->
    <h4>😎 끝났음</h4>
    <ul>
      <template v-for="todo in Todos" :key="todo">
        <li v-if="todo.isComplete">
          <input type="checkbox" checked v-on:change="toggleComplete(todo)" />
          <del>
            {{ todo.name }}
          </del>
        </li>
      </template>
    </ul>
    <!-- 삭제 -->
    <button v-on:click="deleteList" class="delete-btn">지우기 🗑</button>
  </div>
</template>
<style scoped>
.wrap-todo {
  padding: 20px 0;
}
ul,
h4 {
  text-align: left;
}
.delete-btn {
  margin-top: 10px;
  background: rgb(221, 54, 54);
  color: white;
  border: none;
  padding: 5px 10px;
}
</style>
