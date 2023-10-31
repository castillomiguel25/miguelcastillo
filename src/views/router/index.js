import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import FormsPortal from "@/components/FormsPortal.vue";
import PageFound from "@/components/PageFound.vue"



Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
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
      path: '*',
      name: "PageFound",
      component: PageFound,
    }
  ]
})
