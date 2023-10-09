import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  base: '/',
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../components/HomeDashboard.vue"),
      meta: {
        title: "Home",
        layout: "HomeLayout",
      }
    },
    {
      path: "/portal-istana",
      name: "Portal-Istana",
      component: () => import("../components/portal-istana/PortalIstana.vue"),
      meta: {
        title: "Portal Istana",
        layout: "HomeLayout",
      }
    },
    {
      path: "/yuubaca",
      name: "YuuBaca",
      component: () => import("../components/yuubaca/YuuBaca.vue"),
      meta: {
        title: "Yuubaca",
        layout: "HomeLayout",
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

export default router;
