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
const phone = ref("");

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const from = urlParams.get("from");
  const to = urlParams.get("to");

  if (from === "Ipunk") {
    phone.value = "6289606936663";
  } else if (from === "Utay") {
    phone.value = "6289525261870";
  } else {
    phone.value = "6289525261870"
  }

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
    <RSVP :guest="guestName" :phone="phone" />
    <Gift />
    <Wish />
    <Thanks />
    <Footer />
  </div>
  
</template>
