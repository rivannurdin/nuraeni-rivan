<template>
    <section id="event" class="relative py-8 md:py-40 px-6 bg-gradient-to-b from-black to-stone-950 text-white text-center">
      <div class="w-full max-w-2xl mx-auto">
        <p class="text-md md:text-xl mb-5 text-stone-300 animate-fade-in-delay">وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</p>
        <p class="text-md md:text-lg italic text-stone-300 font-lightobject-right animate-fade-in-delay">"Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
        <p class="text-md md:text-lg mb-10 italic text-stone-300 font-lightobject-right animate-fade-in-delay">
          (Q.S. Ar Rum Ayat 21)
        </p>
      </div>
  
      <div class="grid grid-cols-1 max-w-3xl mx-auto animate-fade-in-delay">
        <div class="border border-white/10 rounded-2xl p-10 shadow-lg">
          <h3 class="text-xl font-semibold mb-3">Akad & Resepsi</h3>
          <p class="mb-1"><i class="fa-solid fa-calendar-days mr-2"></i>Minggu, 12 Oktober 2025</p>
          <p class="mb-1"><i class="fa-solid fa-clock mr-2"></i>10:00 WIB - Selesai</p>
          <p class="mb-6"><i class="fa-solid fa-location-dot mr-2"></i>KP. Ciwidara RT 05 RW 14, Pangalengan, Kabupaten Bandung</p>
          <a href="https://goo.gl/maps/5VPDckBhideq3kz27?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-stone-200 transition">
            <!-- <i class="fa-solid fa-location-dot mr-2"></i> -->
            Google Maps
          </a>

          <div class="mt-16">
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
  