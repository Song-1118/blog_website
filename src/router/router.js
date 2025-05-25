// 路由配置
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Env from "@/views/Env.vue";
import Project from "@/views/Project.vue";
import Player1 from "@/views/player/Player1.vue";
import Error from "@/views/Error.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/env",
    name: "Env",
    component: Env,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/player",
    name: "Player",
    component: Player1,
  },
  {
    // 404
    path: "/:catchAll(.*)",
    component: Error,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;