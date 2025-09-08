<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white overflow-hidden">
    <div class="absolute inset-0 flex justify-center items-center -z-20 opacity-10">
      <div class="w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
    </div>

    <div class="absolute md:left-0 md:top-0 md:w-1/2 md:h-full overflow-hidden">
      <img
        :src="Ipunk"
        alt="Ipunk"
        class="w-full h-full object-cover object-left opacity-50 -translate-x-1/2 img-fade"
      />
    </div>

    <div class="absolute md:right-0 md:top-0 md:w-1/2 md:h-full overflow-hidden">
      <img
        :src="Utay"
        alt="Utay"
        class="w-full h-full object-cover object-right opacity-50 translate-x-1/2 img-fade"
      />
    </div>

    <img :src="NR" alt="NR" class="w-24 md:w-36 mx-auto opacity-80">

    <p class="text-2xl md:text-4xl mt-10 md:mt-20 text-gray-300 animate-fade-in-delay" style="font-family: 'Allura', cursive;">The wedding of</p>

    <div class="relative z-10 max-w-3xl">
      <h1 class="text-4xl md:text-8xl font-extrabold tracking-wide mb-2 animate-fade-in">
        {{ coupleNames }}
      </h1>

      <p class="text-md md:text-3xl font-light mb-4 md:mb-24 text-gray-300 animate-fade-in-delay">
        Minggu, 12 Oktober 2025
      </p>

      <p class="text-md md:text-lg font-light mb-2 object-right text-gray-300 animate-fade-in-delay hidden md:block">
        Mengundang dengan penuh rasa bahagia
      </p>

      <p v-if="guestName" class="text-md md:text-3xl italic mb-8 px-6 py-3 shadow-sm animate-bounce-slow">Kepada Yth. <span class="font-bold">{{ guestName }}</span></p>

      <a href="#event" class="px-8 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
        Buka Undangan
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Import gambar
import NR from "../assets/img/NR.png";
import Ipunk from "../assets/img/Ipang.png";
import Utay from "../assets/img/Utay.png";

const coupleNames = "Nuraeni & Rivan";
const guestName = ref("");

onMounted(() => {
  const path = decodeURIComponent(window.location.pathname.replace("/", ""));
  if (path) {
    guestName.value = path.replace(/\+/g, " ");
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 1s ease-out forwards; }
.animate-fade-in-delay { animation: fadeIn 1.5s ease-out forwards; }

@keyframes bounceSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounce-slow { animation: bounceSlow 3s infinite; }
</style>
