<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="intro text-light py-32 font-light text-zinc-200 ">
        <h1 class="text-4xl tracking-wide leading-relaxed my-20">{{ msg }}</h1>
        <h2 class="max-w-3xl text-4xl tracking-wide leading-relaxed my-20">I'm <span class="font-bold">Rivan Nurdin</span>, a back-end software engineer with a talent for developing efficient systems and robust infrastructures that enhance seamless user experiences 😎</h2>
        <h3 class="text-xl my-20">Get in touch 👉 <a class="text" href="mailto:rivancodes@gmail.com">rivancodes@gmail.com</a></h3>
    </div>
</template>

<style scoped>
</style>
