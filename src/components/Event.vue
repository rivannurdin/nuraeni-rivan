<template>
    <section id="event" class="relative py-5 md:py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white text-center">
      <div class="w-full max-w-2xl text-center mx-auto">
        <p class="text-md md:text-xl mb-5 text-gray-300 animate-fade-in-delay">وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</p>
        <p class="text-md md:text-lg italic text-gray-300 font-lightobject-right animate-fade-in-delay">"Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
        <p class="text-md md:text-lg mb-10 italic text-gray-300 font-lightobject-right animate-fade-in-delay">
          (Q.S. Ar Rum Ayat 21)
        </p>
      </div>
  
      <!-- Grid Acara -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-delay">
        <!-- Akad Nikah -->
        <div class="bg-white/10 rounded-2xl p-6 shadow-lg text-left bg-opacity-10">
          <h3 class="text-xl font-semibold mb-3">Akad</h3>
          <p class="mb-1">📅 Minggu, 12 Oktober 2025</p>
          <p class="mb-1">⏰ 10:00 WIB</p>
          <p>📍 KP. Ciwidara RT 05 RW 14, Pangalengan, Kabupaten Bandung</p>
        </div>
  
        <!-- Resepsi -->
        <div class="bg-white/10 rounded-2xl p-6 shadow-lg text-left bg-opacity-10">
          <h3 class="text-xl font-semibold mb-3">Resepsi</h3>
          <p class="mb-1">📅 Minggu, 12 Oktober 2025</p>
          <p class="mb-1">⏰ 11:00 - Selesai WIB</p>
          <p>📍 KP. Ciwidara RT 05 RW 14, Pangalengan, Kabupaten Bandung</p>
        </div>
      </div>

      <!-- Countdown Timer -->
      <div class="mt-12">
        <div class="flex justify-center gap-4 text-center">
          <div class="px-4 py-3 rounded-lg">
            <p class="text-3xl font-bold">{{ days }}</p>
            <span class="text-sm">Hari</span>
          </div>
          <div class="px-4 py-3 rounded-lg">
            <p class="text-3xl font-bold">{{ hours }}</p>
            <span class="text-sm">Jam</span>
          </div>
          <div class="px-4 py-3 rounded-lg">
            <p class="text-3xl font-bold">{{ minutes }}</p>
            <span class="text-sm">Menit</span>
          </div>
          <div class="px-4 py-3 rounded-lg">
            <p class="text-3xl font-bold">{{ seconds }}</p>
            <span class="text-sm">Detik</span>
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
  const targetDate = new Date("2025-10-20T09:00:00").getTime();
  
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
  
  <style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
  .animate-fade-in-delay {
    animation: fadeIn 1.5s ease-out forwards;
  }
  </style>
  