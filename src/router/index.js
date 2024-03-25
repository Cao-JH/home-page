import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Login/index.vue"),
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home/index.vue"),
    children: [
      {
        name: "Favorite",
        path: "/home",
        component: () => import("@/views/FavoritePage/index.vue"),
      },
      {
        name: "Tools",
        path: "/home/tools",
        component: () => import("@/views/ToolsPage/index.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
