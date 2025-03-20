import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Reservation from "@/views/Reservation.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/reservation", component: Reservation },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
