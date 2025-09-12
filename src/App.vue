<script setup>
import Event from './components/Event.vue';
import Gift from './components/Gift.vue';
import Hero from './components/Hero.vue';
import RSVP from './components/RSVP.vue';
import Footer from './components/Footer.vue';
import { onMounted, ref } from 'vue';
import Ayat from './components/Ayat.vue';
import BrideGroom from './components/BrideGroom.vue';
import Thanks from './components/Thanks.vue';
import Wish from './components/Wish.vue';

const guestName = ref("");

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const to = urlParams.get("to");

  if (to) {
    guestName.value = to.replace(/\+/g, " ");
  } else {
    guestName.value = "Tamu Undangan";
  }
});

</script>

<template>

  <div class="bg-black text-white">
    <Hero :guest="guestName"/>
    <Ayat />
    <BrideGroom />
    <Event />
    <RSVP />
    <Gift />
    <Thanks />
    <Wish />
    <Footer />
  </div>
  
</template>
