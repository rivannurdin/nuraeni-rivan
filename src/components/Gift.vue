<template>
  <section
    id="gift"
    class="md:py-16 py:8 px-6 text-center bg-black text-white"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
      Kirim Hadiah/Gift
    </h2>

    <p class="max-w-xl mx-auto text-lg font-light mb-10 animate-fade-in-delay">
      Doa restu Anda sudah sangat berarti. Namun bagi yang ingin mengirim tanda
      kasih, dapat melalui rekening atau alamat berikut:
    </p>

    <!-- Grid Container -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto animate-fade-in-delay"
    >
      <!-- Rekening -->
      <div class="border border-white/10 rounded-2xl p-6 shadow-lg text-left">
        <h3 class="text-xl font-semibold mb-3">Transfer Bank</h3>
        <p class="mb-1 font-medium">Bank BRI</p>
        <p class="mb-1 font-semibold">346901080776535</p>
        <p class="mb-4">a.n. Nuraeni Astuti</p>
        <button
          @click="copyToClipboard('346901080776535')"
          class="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition"
        >
          Salin No. Rekening
        </button>
      </div>

      <!-- Alamat Rumah -->

      <div class="border border-white/10 rounded-xl p-6 shadow-lg text-left">
        <h3 class="text-xl font-semibold mb-3">Alamat Rumah</h3>
        <p class="mb-4">KP. Ciwidara RT 05 RW 14, Desa/Kecamatan Pangalengan, Kabupaten Bandung</p>
        <button
          @click="copyToClipboard('KP. Ciwidara RT 05 RW 14, Desa/Kecamatan Pangalengan, Kabupaten Bandung')"
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
  