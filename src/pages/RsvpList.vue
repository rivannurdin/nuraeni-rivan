<template>
  <section class="min-h-screen py-16 px-6 bg-gradient-to-b from-black to-stone-900 text-white">
    <h2
      class="text-4xl md:text-5xl mb-8 text-center text-stone-300"
      style="font-family: 'Allura', cursive;"
    >
      Daftar Konfirmasi Kehadiran
    </h2>

    <div class="max-w-4xl mx-auto overflow-x-auto bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <table class="min-w-full text-left text-sm md:text-base">
        <thead class="border-b border-white/10 text-stone-300">
          <tr>
            <th class="py-3 px-4">Nama</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4">Waktu</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(r, index) in rsvpList"
            :key="r.id || index"
            class="border-b border-white/10 hover:bg-white/10 transition"
          >
            <td class="py-3 px-4">{{ r.nama }}</td>
            <td
              class="py-3 px-4 font-semibold"
              :class="r.status === 'Bersedia Hadir' ? 'text-green-400' : 'text-red-400'"
            >
              {{ r.status }}
            </td>
            <td class="py-3 px-4 text-white/70">
              {{ formatDate(r.createdAt) }}
            </td>
          </tr>
        </tbody>
      </table>

      <p v-if="!rsvpList.length" class="text-center text-white/60 py-6">
        Belum ada konfirmasi masuk 🙏
      </p>
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { db } from "../../firebase.config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const rsvpList = ref([]);

onMounted(() => {
  const q = query(collection(db, "reservations"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    rsvpList.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
});

function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
</script> 