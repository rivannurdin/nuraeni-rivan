<template>
    <section id="wish" class="py-16 px-6 bg-gradient-to-b from-black to-stone-900 text-white text-center">

      <h2 class="text-4xl md:text-5xl animate-fade-in-delay mb-4 text-stone-300" style="font-family: 'Allura', cursive;">
        Wedding Wish
      </h2>
  
      <!-- Form Ucapan -->
      <form
        @submit.prevent="addUcapan"
        class="max-w-3xl mx-auto mb-12 animate-fade-in-delay md:p-8 md:border md:border-white/10 md:rounded-2xl shadow-lg hover:shadow-xl"
      >
        <div class="mb-4">
          <input
            v-model="nama"
            type="text"
            placeholder="Nama"
            required
            class="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div class="mb-4">
          <textarea
            v-model="pesan"
            placeholder="Ucapan untuk kedua mempelai..."
            required
            rows="4"
            class="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
        </div>
        <button type="submit" class="bg-stone-600 text-white md:text-base text-sm font-semibold px-4 py-2 md:px-8 rounded-full hover:bg-stone-800 transition">
          Kirim Ucapan
        </button>
      </form>
  
      <!-- List Ucapan -->
      <div class="max-w-3xl mx-auto space-y-6">
        <div
          v-for="(u, index) in ucapanList"
          :key="index"
          class="bg-stone-600/5 rounded-xl hadow-md text-left animate-fade-in"
        >
          <p class="font-semibold md:text-lg mb-2">{{ u.nama }}</p>
          <p class="text-white/80 text-sm md:text-base leading-relaxed">"{{ u.pesan }}"</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { ref, onMounted } from "vue";

const nama = ref("");
const pesan = ref("");
const ucapanList = ref([]);

// localStorage.removeItem("ucapanList");

// Load ucapan dari localStorage saat mounted
onMounted(() => {
  const stored = localStorage.getItem("ucapanList");
  if (stored) {
    ucapanList.value = JSON.parse(stored);
  }
});

// Tambah ucapan baru
function addUcapan() {
  if (nama.value.trim() && pesan.value.trim()) {
    ucapanList.value.unshift({
      nama: nama.value.trim(),
      pesan: pesan.value.trim(),
    });

    // Simpan ke localStorage
    localStorage.setItem("ucapanList", JSON.stringify(ucapanList.value));

    // Reset form
    nama.value = "";
    pesan.value = "";
  }
}
</script>
  