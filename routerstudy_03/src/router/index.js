import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Check from "@/views/Check.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Review from "@/views/Review.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/check", component: Check },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/review", component: Review },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
