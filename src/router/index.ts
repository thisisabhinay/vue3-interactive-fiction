import { createRouter, createWebHistory } from "vue-router"
import IntroScreen from "../pages/IntroScreen.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "intro-screen",
      component: IntroScreen
    },
    {
      path: "/game",
      name: "game-player",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/GamePlayer.vue")
    }
  ]
})

export default router
