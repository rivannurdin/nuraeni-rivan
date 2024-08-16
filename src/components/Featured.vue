<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>    
    <div class="featured-projects py-20 md:py-30 lg:py-30">
      <div class="grid grid-cols-3 lg:grid-cols-4">
        <div class="font-medium text-teal-300 text-left lg:text-right mb-5 lg:mb-0 col-4 col-span-5 lg:col-auto">FEATURED PROJECTS</div>
        <div class="px-5 lg:px-10 col-span-3 lg:col-span-3">
          
          <div class="grid grid-rows-1 mb-20">
            <div class="grid grid-cols-6">
              <div class="col-span-6 lg:col-span-5 pr-0 lg:pr-5">
                <a href="https://www.gravitasi.co.id/portfolio/kmob-pemda-depok/" target="_blank">
                  <img src="/src/assets/img/projects/kmob.png" alt="">
                </a>
              </div>
              <div class="col-span-6 lg:col-auto">
                <p class="text-zinc-100 font-medium mt-5 lg:mt-0">KMOB Platform</p>
                <p class="font-mono text-sm">The Depok City Government uses KMOB as the core platform to connect over 5,000 employees working from offices, homes, and in the field.</p>
              </div>
            </div>
          </div>

          <div class="grid grid-rows-1 mb-20">
            <div class="grid grid-cols-6">
              <div class="col-span-6 lg:col-span-5 pr-0 lg:pr-5">
                <a href="https://djangkepapp.gravita.si" target="_blank">
                  <img src="/src/assets/img/projects/djangkep.png" alt="">
                </a>
              </div>
              <div class="col-span-6 lg:col-auto mt-5 lg:mt-0">
                <p class="text-zinc-100 font-medium">Djangkep</p>
                <p class="font-mono text-sm">Developed specifically for villages that wish to facilitate community services in submitting letters.</p>
              </div>
            </div>
          </div>

          <div class="grid grid-rows-1 mb-20">
            <div class="grid grid-cols-6">
              <div class="col-span-6 lg:col-span-5 pr-0 lg:pr-5">
                <a href="https://mobooking.id" target="_blank">
                  <img src="/src/assets/img/projects/mobooking.jpeg" alt="">
                </a>
              </div>
              <div class="col-span-6 lg:col-auto mt-5 lg:mt-0">
                <p class="text-zinc-100 font-medium">Mobooking</p>
                <p class="font-mono text-sm">Business application to help small, medium and growing businesses make marketing, operational and customer management easier.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
