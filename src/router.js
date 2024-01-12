import { createWebHashHistory, createRouter } from "vue-router";

import AppHome from "./views/AppHome.vue";
import PrenotazioniView from "./views/PrenotazioniView.vue";
import ProdottiView from "./views/ProdottiView.vue";
import StoriaContattiView from "./views/StoriaContattiView.vue";

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/prenotazioni",
      name: "prenotazioni",
      component: PrenotazioniView,
    },
    {
      path: "/prodotti",
      name: "prodotti",
      component: ProdottiView,
    },
    {
      path: "/storia&contatti",
      name: "storia&contatti",
      component: StoriaContattiView,
    },
  ],
});

export { router };
