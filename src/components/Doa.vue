<template>
    <section
      id="doa"
      class="py-16 px-6 bg-gradient-to-b from-stone-900 to-black text-white"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
        Doa & Ucapan
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
            placeholder="Nama Anda"
            required
            class="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div class="mb-4">
          <textarea
            v-model="pesan"
            placeholder="Tuliskan doa atau ucapan Anda..."
            required
            rows="4"
            class="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-stone-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-stone-800 transition"
        >
          Kirim Ucapan
        </button>
      </form>
  
      <!-- List Ucapan -->
      <div class="max-w-3xl mx-auto space-y-6">
        <div
          v-for="(u, index) in ucapanList"
          :key="index"
          class="bg-stone-600/5 rounded-xl p-5 shadow-md text-left animate-fade-in"
        >
          <p class="font-semibold text-lg mb-2">{{ u.nama }}</p>
          <p class="text-white/80 leading-relaxed">"{{ u.pesan }}"</p>
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
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
  .animate-fade-in-delay { animation: fadeIn 1.5s ease-out forwards; }
  </style>
  