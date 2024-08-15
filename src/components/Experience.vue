<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>    
    <div class="experience py-20 md:py-32 lg:py-32">
      <div class="grid grid-cols-3 lg:grid-cols-4">
        <div class="font-medium text-teal-300 text-left lg:text-right mb-5 lg:mb-0 col-4 col-span-5 lg:col-auto">EXPERIENCE</div>
        <div class="px-5 lg:px-10 col-span-3 lg:col-span-3">
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium"><a href="https://www.gravitasi.co.id/" target="_blank">Gravitasi</a></p>
                <p>Senior Back End Engineer</p>
              </div>
              <div>
                <p class="text-right font-mono text-sm">Jul 2022 – Present</p>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium"><a href="https://www.linkedin.com/company/pt-hms/about/" target="_blank">Hexa Maju Samasta</a></p>
                <p>Back End Developer</p>
              </div>
              <div>
                <p class="text-right font-mono text-sm">Nov 2019 – Jul 2021</p>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium"><a href="https://commonroom.info" target="_blank">Common Room Networks Foundation</a></p>
                <p>Technical Staff</p>
              </div>
              <div>
                <p class="text-right font-mono text-sm">Jul - Oct 2023</p>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium"><a href="http://exaditama.id/" target="_blank">Exaditama Teknologi Kreativa</a></p>
                <p>Back End Developer</p>
              </div>
              <div>
                <p class="text-right font-mono text-sm">May - Oct 2019    </p>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium">Exa Aditama Internasional</p>
                <p>Back End Developer</p>
              </div>
              <div>
                <p class="text-right font-mono text-sm">Jun 2017 - Dec 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
