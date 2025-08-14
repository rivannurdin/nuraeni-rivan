<script setup>
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Skill from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Featured from './components/Featured.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <Intro msg="Hi 👋" intro="a backend software engineer with a passion for building efficient systems and rock-solid infrastructures that power smooth, scalable, and seamless digital experiences 😎"/>
    <About/>
    <Skill/>
    <Experience/>
    <Featured/>
    <Projects/>
  </div>
  <Footer/>
</template>
