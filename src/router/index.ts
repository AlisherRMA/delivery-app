import Vue from "vue";
import VueRouter, { RawLocation, Route, RouteConfig } from "vue-router";
import { AuthService } from "../modules/auth/services/auth.service";

// Catching route errors
const originalPush = VueRouter.prototype.push as (location: RawLocation) => Promise<Route>;
VueRouter.prototype.push = async function(location: RawLocation) {
  return originalPush.call(this, location).catch(err => {
    if (err.name == "NavigationDuplicated") return err;
    throw err;
  });
};

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  { path: "/", name: "ItemsList", component: () => import("../modules/dishes/views/Index.vue") },
  { path: "/signin", name: "Signin", component: () => import("../modules/auth/views/Index.vue") },
  {
    path: "/management",
    name: "Management",
    component: () => import("../modules/management/views/Index.vue"),
    meta: {
      protected: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isProtected = to.meta.protected;

  if (isProtected) {
    const isAuthorized = AuthService.isAuthorized();
    if (!isAuthorized) return next("/signin");
  }

  next();
});

export default router;
