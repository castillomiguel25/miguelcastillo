import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import FormsPortal from "@/components/FormsPortal.vue";
import PageFound from "@/components/PageFound.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home-view",
    component: HomeView,
  },

  {
    path: "/forms",
    name: "forms-portal",
    component: FormsPortal,
  },

  {
    path: "/:pathMath(.*)",
    name: "PageFound",
    component: PageFound,
  },

  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
