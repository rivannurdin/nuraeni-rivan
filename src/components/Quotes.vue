<template>
    <section
      id="quotes"
      class="py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-5xl mx-auto">
        <div class="p-6 text-center animate-fade-in">
          <p class="text-xl md:text-2xl leading-relaxed pb-6">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu."
          </p>

          <h2 class="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-delay">
            Nuraeni Astuti & Rivan Nurdin
          </h2>
      
          <p class="text-lg font-light italic animate-fade-in-delay">
            Dengan penuh rasa syukur, kami mengucapkan terima kasih.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Tidak ada script khusus, statis dulu
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
  .animate-fade-in-delay { animation: fadeIn 1.5s ease-out forwards; }
  </style>
  