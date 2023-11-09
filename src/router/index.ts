import { createRouter, createWebHistory } from "vue-router"
import StoryPage from "../pages/StoryPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "story",
      component: StoryPage
    }
  ]
})

export default router
