import { createRouter, createWebHistory } from "vue-router";
import HomeDashboard from "@/components/HomeDashboard.vue";
import PortalIstana from "@/components/portal-istana/PortalIstana.vue";
import YuuBaca from "@/components/yuubaca/YuuBaca.vue";

const router = createRouter({
  history: createWebHistory('/'),
  base: '/',
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => HomeDashboard,
      meta: {
        title: "Home",
        layout: "HomeLayout",
      }
    },
    {
      path: "/portal-istana",
      name: "Portal-Istana",
      component: () => PortalIstana,
      meta: {
        title: "Portal Istana",
        layout: "HomeLayout",
      }
    },
    {
      path: "/yuubaca",
      name: "YuuBaca",
      component: () => YuuBaca,
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
