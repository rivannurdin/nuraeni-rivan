<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Intro from './components/Intro.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header msg="Hello! 👋" />
  <div class="container mx-auto">
    <Intro msg="Hello! 👋" />
    <!-- <HelloWorld msg="Vite + Vue" /> -->
  </div>
</template>
