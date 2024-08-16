<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>    
    <div class="experience py-20 md:py-30 lg:py-30">
      <div class="grid grid-cols-3 lg:grid-cols-4">
        <div class="font-medium text-teal-300 text-left lg:text-right mb-5 lg:mb-0 col-4 col-span-5 lg:col-auto">EXPERIENCE</div>
        <div class="px-5 lg:px-10 col-span-3 lg:col-span-3">
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium"><a href="https://www.gravitasi.co.id/" target="_blank">Gravitasi</a></p>
                <p class="text-sm lg:text-base">Senior Back End Engineer</p>
              </div>
              <div>
                <p class="text-right font-mono text-xs lg:text-sm">Jul 2022 – Present</p>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium"><a href="https://www.linkedin.com/company/pt-hms/about/" target="_blank">Hexa Maju Samasta</a></p>
                <p class="text-sm lg:text-base">Back End Developer</p>
              </div>
              <div>
                <p class="text-right font-mono text-xs lg:text-sm">Nov 2019 – Jul 2021</p>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium"><a href="https://commonroom.info" target="_blank">Common Room Networks Foundation</a></p>
                <p class="text-sm lg:text-base">Technical Staff</p>
              </div>
              <div>
                <p class="text-right font-mono text-xs lg:text-sm">Jul - Oct 2023</p>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium"><a href="http://exaditama.id/" target="_blank">Exaditama Teknologi Kreativa</a></p>
                <p class="text-sm lg:text-base">Back End Developer</p>
              </div>
              <div>
                <p class="text-right font-mono text-xs lg:text-sm">May - Oct 2019    </p>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 mb-8">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-zinc-100 font-medium">Exa Aditama Internasional</p>
                <p class="text-sm lg:text-base">Back End Developer</p>
              </div>
              <div>
                <p class="text-right font-mono text-xs lg:text-sm">Jun 2017 - Dec 2018</p>
              </div>
            </div>
          </div>

          <div class="grid grid-rows-1 mt-20 ">
            <div class="grid grid-cols-2">
              <div class="col-span-2">
                <p class="text-zinc-100 font-medium text-lg">
                  <a href="/resume.pdf" target="_blank">
                    <span class="inline-block"> View My Resume <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
