import { createRouter, createWebHistory } from "vue-router"
import GamePlayer from "../pages/GamePlayer.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "game",
      component: GamePlayer
    }
  ]
})

export default router
