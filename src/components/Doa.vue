<template>
    <section
      id="doa"
      class="py-16 px-6 bg-gradient-to-b from-gray-900 to-black text-white border-t border-white/10"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
        Doa & Ucapan
      </h2>
  
      <!-- Form Ucapan -->
      <form
        @submit.prevent="addUcapan"
        class="max-w-2xl mx-auto bg-white/10 rounded-2xl p-6 shadow-lg mb-12 animate-fade-in-delay"
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
          class="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Kirim Ucapan
        </button>
      </form>
  
      <!-- List Ucapan -->
      <div class="max-w-3xl mx-auto space-y-6">
        <div
          v-for="(u, index) in ucapanList"
          :key="index"
          class="bg-white/5 rounded-xl p-5 shadow-md text-left animate-fade-in"
        >
          <p class="font-semibold text-lg mb-2">{{ u.nama }}</p>
          <p class="text-white/80 leading-relaxed">"{{ u.pesan }}"</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const nama = ref("");
  const pesan = ref("");
  const ucapanList = ref([
    { nama: "Tamu A", pesan: "Selamat menempuh hidup baru 🎉" },
    { nama: "Tamu B", pesan: "Semoga menjadi keluarga sakinah mawaddah warahmah 💕" },
  ]);
  
  function addUcapan() {
    if (nama.value && pesan.value) {
      ucapanList.value.unshift({
        nama: nama.value,
        pesan: pesan.value,
      });
      // reset form
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
  