<template>
  <section
    id="rsvp"
    class="py-16 px-6 text-center bg-gradient-to-b from-stone-900 to-black text-white"
  >
    <!-- Judul -->
    <h2
      class="text-4xl md:text-5xl animate-fade-in-delay mb-4 text-stone-300"
      style="font-family: 'Allura', cursive;"
    >
      Reservation
    </h2>

    <!-- Deskripsi -->
    <p
      class="max-w-xl md:max-w-3xl mx-auto md:text-lg font-light mb-8 animate-fade-in-delay"
    >
      Merupakan kebahagiaan mendalam bagi kami apabila Bapak/Ibu/Saudara/i
      berkenan hadir, serta mendoakan dan merestui langkah kami pada hari
      yang penuh makna ini.
    </p>

    <!-- Form RSVP -->
    <form
      @submit.prevent="addRSVP"
      class="max-w-2xl mx-auto animate-fade-in-delay p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg"
    >
      <!-- Input Nama -->
      <div class="mb-6">
        <input
          v-model="nama"
          type="text"
          placeholder="Nama"
          required
          class="w-full px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <!-- Pilihan Kehadiran -->
      <div class="mb-6 text-left">
        <label class="block mb-2 font-medium text-stone-300">Konfirmasi Kehadiran</label>
        <select
          v-model="status"
          required
          class="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-stone-400"
        >
          <option value="" disabled>Pilih salah satu</option>
          <option value="Bersedia Hadir">Bersedia Hadir</option>
          <option value="Berhalangan Hadir">Berhalangan Hadir</option>
        </select>
      </div>

      <!-- Tombol -->
      <button
        type="submit"
        class="w-full md:w-auto bg-stone-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full shadow-md hover:bg-stone-700 hover:shadow-lg transition transform hover:scale-105"
      >
        Kirim
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore";

const nama = ref("");
const status = ref("");

// Tambah RSVP ke Firestore
async function addRSVP() {
  if (nama.value.trim() && status.value) {
    await addDoc(collection(db, "reservations"), {
      nama: nama.value.trim(),
      status: status.value,
      createdAt: Date.now(),
    });

    // Reset form
    nama.value = "";
    status.value = "";

    alert("Terima kasih, konfirmasi Anda sudah terkirim 🙏");
  }
}
</script>