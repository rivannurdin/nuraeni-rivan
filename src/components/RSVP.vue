<template>
    <section
      id="rsvp"
      class="py-16 px-6 text-center bg-gradient-to-b from-gray-900 to-black text-white border-t border-white/10"
    >
      <!-- Judul -->
      <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
        Konfirmasi Kehadiran
      </h2>
  
      <!-- Deskripsi -->
      <p class="max-w-xl mx-auto text-lg font-light mb-8 animate-fade-in-delay">
        Kami sangat berbahagia apabila Bapak/Ibu/Saudara/i berkenan hadir dan
        memberikan doa restu pada hari bahagia kami.
      </p>
  
      <!-- Tombol WhatsApp -->
      <a
        :href="waLink"
        target="_blank"
        class="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105 animate-fade-in-delay"
      >
        Konfirmasi via WhatsApp
      </a>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from "vue";
  
  // Nomor WhatsApp tujuan
  const phone = "6281234567890"; // ganti dengan nomor kamu
  const guestName = ref("");
  
  // Ambil nama tamu dari URL
  onMounted(() => {
    const path = decodeURIComponent(window.location.pathname.replace("/", ""));
    if (path) {
      guestName.value = path.replace(/\+/g, " ");
    }
  });
  
  // Link WhatsApp dengan pesan otomatis
  const waLink = computed(() => {
    const message = guestName.value
      ? `Halo, saya ${guestName.value} ingin konfirmasi kehadiran.`
      : "Halo, saya ingin konfirmasi kehadiran.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  });
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
  .animate-fade-in-delay {
    animation: fadeIn 1.5s ease-out forwards;
  }
  </style>
  