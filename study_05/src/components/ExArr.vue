<script setup>
import Todo from "./Todo.vue";
import Exarray from "./Exarray.vue";
import { ref } from "vue";
const showTodolist = ref(false);
const showarray = ref(false);
</script>
<template>
  <div class="wrap1">
    <div class="container">
      <h2>투두리스트 예제</h2>
      <button v-on:click="showTodolist = !showTodolist">
        {{ showTodolist ? "🖤CLOSE🖤" : "💗OPEN💗" }}
      </button>
      <Todo v-if="showTodolist" />
    </div>
    <hr />
    <div class="container">
      <h2>Array 공부</h2>
      <button v-on:click="showarray = !showarray">
        {{ showarray ? "🖤CLOSE🖤" : "💗OPEN💗" }}
      </button>
      <Exarray v-if="showarray" />
    </div>
  </div>
</template>
<style scoped>
.wrap1 {
  display: flex;
  text-align: center;
}
.container {
  flex: 1;
}
.wrap1 .container h2 {
  color: rgb(253, 64, 96);
}
</style>
