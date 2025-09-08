<template>
    <section
      id="quotes"
      class="py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-white border-t border-white/10"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
        Sepenggal Kata Dari Kami
      </h2>
  
      <!-- Grid Quotes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <!-- Mempelai Pria -->
        <div class="bg-white/5 rounded-2xl p-6 shadow-lg text-center animate-fade-in">
          <img
            src="https://via.placeholder.com/120"
            alt="Mempelai Pria"
            class="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white/20 object-cover"
          />
          <h3 class="text-xl font-semibold mb-3">Rivan Nurdin</h3>
          <p class="italic text-lg leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            lectus vitae lacus viverra posuere. Ut hendrerit, nisi eget pretium
            sagittis, ex ligula fringilla purus, ac sodales ipsum nisi a est."
          </p>
        </div>
  
        <!-- Mempelai Wanita -->
        <div class="bg-white/5 rounded-2xl p-6 shadow-lg text-center animate-fade-in-delay">
          <img
            src="https://via.placeholder.com/120"
            alt="Mempelai Wanita"
            class="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white/20 object-cover"
          />
          <h3 class="text-xl font-semibold mb-3">Nuraenia Astuti</h3>
          <p class="italic text-lg leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            lectus vitae lacus viverra posuere. Ut hendrerit, nisi eget pretium
            sagittis, ex ligula fringilla purus, ac sodales ipsum nisi a est."
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
  