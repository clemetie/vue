import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/Home.vue";
import about from "@/views/about.vue";
import check from "@/views/Check.vue";
import review from "@/views/Review.vue";
import reservation from "@/views/Reservation.vue";
import site from "@/views/Site.vue";
import person from "@/views/Person.vue";
import productdetail from "@/views/Product_detail.vue";

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/product/:id",
    component: productdetail,
  },

  {
    path: "/about",
    component: about,
  },
  {
    path: "/check",
    component: check,
  },
  {
    path: "/Review",
    component: review,
  },
  {
    path: "/reservation",
    component: reservation,
  },
  {
    path: "/site",
    component: site,
  },
  {
    path: "/person",
    component: person,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
