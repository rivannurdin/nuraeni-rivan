<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white overflow-hidden md:-mb-0 -mb-16">
    <div class="absolute inset-0 flex justify-center items-center -z-20 opacity-10">
      <div class="w-[600px] h-[600px] rounded-full bg-stone-600 blur-3xl"></div>
    </div>
    <div class="absolute md:left-0 md:top-0 md:w-1/2 md:h-full overflow-hidden">
      <img
      :src="Ipunk"
      alt="Ipunk"
      class="w-full h-full object-cover object-left opacity-40 -translate-x-1/2 img-fade"
      />
    </div>
    
    <div class="absolute md:right-0 md:top-0 md:w-1/2 md:h-full overflow-hidden">
      <img
      :src="Utay"
      alt="Utay"
      class="w-full h-full object-cover object-right opacity-40 translate-x-1/2 img-fade"
      />
    </div>
    
    <img :src="NR" alt="NR" class="w-36 md:w-56 mx-auto mb-24 img-fade">
    <p class="text-2xl md:text-4xl text-stone-300 animate-fade-in-delay" style="font-family: 'Allura', cursive;">The wedding of</p>

    <div class="relative z-10 max-w-3xl">
      <h1 class="text-4xl md:text-8xl font-semibold tracking-wide mb-2 animate-fade-in">
        {{ coupleNames }}
      </h1>

      <p class="text-base md:text-3xl font-light mb-4 md:mb-24 animate-fade-in-delay">
        Minggu, 12 Oktober 2025
      </p>

      <p class="text-lg md:text-xl font-light mb-2 md:mt-14 object-right text-stone-300 animate-fade-in-delay hidden md:block">
        Mengundang dengan penuh rasa bahagia
      </p>

      <p v-if="guest" class="text-md md:text-3xl italic mb-8 px-6 py-3 shadow-sm animate-bounce-slow">Kepada Yth. <span class="font-bold">{{ guest }}</span></p>

      <a href="#event" class="px-6 py-3 rounded-full bg-stone-600 text-white font-semibold shadow-lg hover:bg-stone-800 transition transform hover:scale-105">
        <i class="fa-solid fa-envelope-open mr-2"></i>Lihat
      </a>
    </div>
  </section>
</template>

<script setup>
// Import gambar
import NR from "../assets/img/NR.png";
import Ipunk from "../assets/img/Ipang.png";
import Utay from "../assets/img/Utay.png";

const coupleNames = "Nuraeni & Rivan";

defineProps({
  guest: String,
})

</script>
