<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Intro from './components/Intro.vue';
import Header from './components/Header.vue';
</script>

<template>
  <!-- <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style="background: radial-gradient(600px at 73px 697px, rgba(29, 78, 216, 0.15), transparent 80%);"></div> -->
  <Header msg="Hello! 👋" />
  <div class="container mx-auto px-10">
    <Intro msg="Hello! 👋" />
    <!-- <HelloWorld msg="Vite + Vue" /> -->
  </div>
</template>
