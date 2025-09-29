<template>
  <section id="wish" class="py-16 px-6 bg-gradient-to-b from-stone-900 to-black   text-center">
    <div data-aos="slide-up">
      <h2 class="text-4xl md:text-5xl animate-fade-in-delay mb-4" style="font-family: 'Allura', cursive;">
      Wedding Wish
    </h2>

    <!-- Form Ucapan -->
    <form
        @submit.prevent="addUcapan"
        class="max-w-2xl mx-auto mb-12 animate-fade-in-delay md:p-8 md:border md:border-white/10 md:rounded-2xl shadow-lg hover:shadow-xl"
      >
        <div class="mb-4">
          <input
            v-model="nama"
            type="text"
            placeholder="Nama"
            required
            class="w-full px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div class="mb-4">
          <textarea
            v-model="pesan"
            placeholder="Ucapan untuk kedua mempelai..."
            required
            rows="4"
            class="w-full px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full md:w-auto bg-stone-600   text-sm md:text-base font-semibold px-6 py-2 rounded-full shadow-md hover:bg-stone-700 hover:shadow-lg transition transform hover:scale-105"
        >
        <i class="fa-solid fa-paper-plane mr-2"></i>Kirim Ucapan
        </button>
      </form>

      <!-- List Ucapan -->
      <div class="max-w-3xl mx-auto space-y-2">
        <div
          v-for="(u, index) in ucapanList"
          :key="index"
          class="bg-stone-900/60 rounded-xl hadow-md text-left animate-fade-in p-4"
        >
          <p class="font-semibold md:text-lg mb-2">{{ u.nama }}</p>
          <p class=" /80 text-sm md:text-base leading-relaxed">"{{ u.pesan }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "../../firebase.config";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

const nama = ref("");
const pesan = ref("");
const ucapanList = ref([]);

// 🔹 Pasang realtime listener saat component mounted
onMounted(() => {
  const q = query(collection(db, "ucapan"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    ucapanList.value = snapshot.docs.map(doc => doc.data());
  });
});

// 🔹 Tambah ucapan ke Firestore
async function addUcapan() {
  if (nama.value.trim() && pesan.value.trim()) {
    await addDoc(collection(db, "ucapan"), {
      nama: nama.value.trim(),
      pesan: pesan.value.trim(),
      createdAt: Date.now()
    });

    // Reset form biar kosong lagi
    nama.value = "";
    pesan.value = "";
  }
}
</script>
  