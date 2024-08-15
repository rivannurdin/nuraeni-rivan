<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>    
    <div class="intro py-20 md:py-32 lg:py-32 font-light text-zinc-200">
        <p class="text-2xl md:text-3xl lg:text-4xl tracking-wide md:tracking-wide lg:tracking-wide leading-relaxed md:leading-relaxed lg:leading-relaxed my-20">{{ msg }}</p> 
        <p class="text-2xl md:text-3xl lg:text-4xl tracking-wide md:tracking-wide lg:tracking-wide leading-relaxed md:leading-relaxed lg:leading-relaxed my-20 max-w-3xl">I'm <span class="font-medium">Rivan Nurdin</span>, a back-end software engineer with a talent for developing efficient systems and robust infrastructures that enhance seamless user experiences 😎</p> 
        <p class="text-lg md:text-lg lg:text-xl my-20">Get in touch 👉 <a href="mailto:rivancodes@gmail.com">rivancodes@gmail.com</a></p>
    </div>
</template>

<style scoped>
</style>
