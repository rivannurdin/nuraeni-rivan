<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Intro from './components/Intro.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Skill from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Featured from './components/Featured.vue';

</script>

<template>
  <!-- <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style="background: radial-gradient(600px at 73px 697px, rgba(29, 78, 216, 0.15), transparent 80%);"></div> -->
  <Header msg="Hello! 👋" />
  <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <Intro msg="Hello! 👋" />
    <About/>
    <Skill/>
    <Experience/>
    <Featured/>
  </div>
</template>
