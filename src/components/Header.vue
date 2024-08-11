<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <header class="intro">
        <h1 class="text-3xl font-bold underline">{{ msg }}</h1>
        <h2 class="text-3xl font-bold underline">I'm <b>Rivan Nurdin</b>, a back-end software engineer with a talent for developing efficient systems and robust infrastructures that enhance seamless user experiences 😎</h2>
        <h3 class="intro_contact">Get in touch 👉 <a href="mailto:rivancodes@gmail.com">rivancodes@gmail.com</a></h3>
    </header>
</template>

<style scoped>
</style>
