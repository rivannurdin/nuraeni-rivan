import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../App.vue'
import RsvpList from '../pages/RsvpList.vue'

const router = createRouter({
  history: createWebHashHistory('/nuraeni-rivan/'),
  routes: [
    { path: '/', component: Home },
    { path: '/rsvp-list', component: RsvpList },
  ],
})

export default router