import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import RSVPList from '../pages/RSVPList.vue'

const router = createRouter({
  history: createWebHistory('/nuraeni-rivan'),
  routes: [
    { path: '/', component: Home },
    { path: '/rsvp-list', component: RSVPList },
  ],
})

export default router
