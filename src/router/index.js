import { createRouter, createWebHistory } from "vue-router";
import AccueilVue from "../views/Accueil.vue";
import ErreurVue from "../views/Erreur.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: AccueilVue,
    },
    {
      path: "/:catchAll(.*)",
      name: "erreur",
      component: ErreurVue,
    },
  ],
});

export default router;
