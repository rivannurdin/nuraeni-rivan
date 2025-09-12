import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import RSVPList from '../pages/RsvpList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/rsvp-list', component: RSVPList },
  ],
})

export default router
