<template>
    <footer
      id="closing"
      class="py-16 px-6 bg-black text-white text-center border-t border-white/10"
    >
      <!-- Ucapan -->
      <p class="text-xl md:text-2xl font-light mb-6 animate-fade-in">
        Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/
        Saudara/i berkenan hadir serta memberikan doa restu.
      </p>
  
      <!-- Nama Pasangan -->
      <h2
        class="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-delay"
      >
        Rivan Nurdin & Nuraenia Astuti
      </h2>
  
      <!-- Terima Kasih -->
      <p class="text-lg font-light italic animate-fade-in-delay">
        Dengan penuh rasa syukur, kami mengucapkan terima kasih.
      </p>
  
      <!-- Footer Kecil -->
      <div class="mt-12 text-sm text-white/60">
        <p>© 2025 Undangan Rivan & Nuraenia</p>
        <p class="mt-1">Dibuat dengan ❤️ menggunakan Vue & Tailwind CSS</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Tidak butuh script khusus, statis
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
  .animate-fade-in-delay { animation: fadeIn 1.5s ease-out forwards; }
  </style>
  