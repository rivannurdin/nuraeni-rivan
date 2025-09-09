<template>
  <section
    id="rsvp"
    class="py-16 px-6 text-center bg-gradient-to-b from-stone-900 to-black text-white"
  >
    <!-- Judul -->
    <h2 class="text-2xl md:text-4xl font-bold mb-6 animate-fade-in">
      Konfirmasi Kehadiran
    </h2>

    <!-- Deskripsi -->
    <p class="max-w-xl md:max-w-3xl mx-auto md:text-lg font-light mb-8 animate-fade-in-delay">
      Merupakan kebahagiaan mendalam bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir, serta berkenan mendoakan dan merestui langkah kami pada hari yang penuh makna ini.
    </p>

    <!-- Tombol WhatsApp -->
    <a
      :href="waLink"
      target="_blank"
      class="inline-block bg-stone-600 text-white text-sm font-semibold px-4 py-2 md:px-8 md:py-3 rounded-full shadow-lg hover:bg-stone-800 transition transform hover:scale-105 animate-fade-in-delay"
    >
    <i class="fa-brands fa-whatsapp mr-2"></i> Konfirmasi via WhatsApp
    </a>
  </section>
</template>
  
<script setup>
import { computed } from "vue";

const props = defineProps({
  guest: String,
  phone: String,
})

const waLink = computed(() => {
  const message = props.guest
    ? `Halo, saya ${props.guest} ingin konfirmasi kehadiran.`
    : "Halo, saya ingin konfirmasi kehadiran.";
  return `https://wa.me/${props.phone}?text=${encodeURIComponent(message)}`;
});

</script>
  