<template>
  <section id="bride_groom" class="relative py-16 px-6 bg-gradient-to-b from-stone-900 to-black   text-center">
   <div class="w-full max-w-2xl mx-auto" data-aos="fade-up">
      <h2 class="text-4xl md:text-5xl animate-fade-in-delay mb-16" style="font-family: 'Allura', cursive;">
        Bride &<br>Groom
      </h2>

      <div class="grid grid-cols-1 text-left" data-aos="fade-right">
        <h2 class="text-3xl md:text-5xl mb-2 animate-fade-in-delay font-serif">
          Nuraeni Astuti
        </h2>
        <p class="mb-1 text-sm md:text-base text-stone-300" data-aos="fade-right">Putri ketiga dari<br>Bapak H Undang Daman (Alm) & <br>Ibu Ai Komala</p>
      </div>

      <p class="py-16 text-2xl md:text-4xl" style="font-family: 'Allura', cursive;" data-aos="fade-up">dengan</p>

      <div class="grid text-right" data-aos="fade-left">
        <h2 class="text-3xl md:text-5xl mb-2 animate-fade-in-delay font-serif">
          Rivan Nurdin S.Kom
        </h2>
        <p class="mb-1 text-sm md:text-base text-stone-300" data-aos="fade-left">Putra kedua dari<br>Bapak Ade Saefudin (Alm) &<br>Ibu Sri Rochayani</p>
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
  