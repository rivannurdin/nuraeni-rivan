<template>
  <section id="event" class="relative py-16 md:py-36 px-6 bg-gradient-to-b from-black to-stone-900 text-white text-center">
    <div class="grid grid-cols-1 max-w-3xl mx-auto animate-fade-in-delay">
      <div class="border border-white/10 rounded-2xl p-10 shadow-lg hover:shadow-xl">
        <h2 class="text-4xl md:text-5xl animate-fade-in-delay mb-6" style="font-family: 'Allura', cursive;">
          Akad & Resepsi
        </h2>

        <p class="mb-1"><i class="fa-solid fa-calendar-days mr-2"></i>Ahad, 12 Oktober 2025</p>
        <p class="mb-1"><i class="fa-solid fa-clock mr-2"></i>10:00 WIB - Selesai</p>
        <p class="mb-6"><i class="fa-solid fa-location-dot mr-2"></i>KP. Ciwidara RT 05 RW 14, Pangalengan, Kabupaten Bandung</p>
        <a href="https://goo.gl/maps/5VPDckBhideq3kz27?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 bg-stone-600 text-white rounded-full text-sm font-semibold hover:bg-stone-800 transition">
          Google Maps
        </a>

        <div class="mt-12 md:mt-16">
          <hr class="border-white/10 md:border-transparent pb-6 md:pb-0">
          <div class="flex justify-center md:gap-4 text-center">
            <div class="px-4 py-3">
              <p class="text-3xl md:text-5xl font-bold">{{ days }}</p>
              <span class="text-sm">Hari</span>
            </div>
            <div class="px-4 py-3">
              <p class="text-3xl md:text-5xl font-bold">{{ hours }}</p>
              <span class="text-sm">Jam</span>
            </div>
            <div class="px-4 py-3">
              <p class="text-3xl md:text-5xl font-bold">{{ minutes }}</p>
              <span class="text-sm">Menit</span>
            </div>
            <div class="px-4 py-3">
              <p class="text-3xl md:text-5xl font-bold">{{ seconds }}</p>
              <span class="text-sm">Detik</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </section>
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  
  // Target tanggal acara
  const targetDate = new Date("2025-10-12T10:00:00").getTime();
  
  let interval;
  
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;
  
    if (distance <= 0) {
      clearInterval(interval);
      days.value = hours.value = minutes.value = seconds.value = 0;
      return;
    }
  
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  };
  
  onMounted(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });
  
  onUnmounted(() => {
    clearInterval(interval);
  });
  </script>
  