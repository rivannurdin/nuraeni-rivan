<template>
    <section
      id="gift"
      class="py-16 px-6 text-center bg-black text-white border-t border-white/10"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
        Kirim Hadiah / Gift
      </h2>
  
      <p class="max-w-xl mx-auto text-lg font-light mb-10 animate-fade-in-delay">
        Doa restu Anda sudah sangat berarti. Namun bagi yang ingin mengirim tanda
        kasih, dapat melalui rekening atau alamat berikut:
      </p>
  
      <!-- Grid Container -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-delay"
      >
        <!-- Rekening -->
        <div class="bg-white/10 rounded-2xl p-6 shadow-lg text-left">
          <h3 class="text-xl font-semibold mb-3">Transfer Bank</h3>
          <p class="mb-1 font-medium">Bank BCA</p>
          <p class="mb-1 font-semibold">123456789</p>
          <p class="mb-4">a.n. Rivan Nurdin</p>
          <button
            @click="copyToClipboard('123456789')"
            class="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition"
          >
            Salin No. Rekening
          </button>
        </div>
  
        <!-- Alamat Rumah -->
        <div class="bg-white/10 rounded-2xl p-6 shadow-lg text-left">
          <h3 class="text-xl font-semibold mb-3">Alamat Rumah</h3>
          <p class="mb-4">Jl. Melati No. 10, Jakarta</p>
          <button
            @click="copyToClipboard('Jl. Melati No. 10, Jakarta')"
            class="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition"
          >
            Salin Alamat
          </button>
        </div>
      </div>
  
      <!-- Alert Copy -->
      <transition name="fade">
        <p
          v-if="copied"
          class="mt-8 text-green-400 font-medium animate-fade-in"
        >
          ✅ {{ copied }} berhasil disalin!
        </p>
      </transition>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const copied = ref("");
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      copied.value = text;
      setTimeout(() => (copied.value = ""), 2000);
    });
  }
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
  .animate-fade-in-delay { animation: fadeIn 1.5s ease-out forwards; }
  
  .fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
  .fade-enter-from, .fade-leave-to { opacity: 0; }
  </style>
  