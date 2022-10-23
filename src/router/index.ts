import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import MainView from "@/views/main-view.vue";

import { ROUTES_TO } from "@/constants";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: ROUTES_TO.all,
    name: "MainView",
    component: MainView,
  },
  {
    path: ROUTES_TO.waiting,
    name: "WaitingView",
    component: () => import("@/views/waiting-view.vue"),
  },
  {
    path: ROUTES_TO.loaded,
    name: "LoadedView",
    component: () => import("@/views/loaded-view.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
