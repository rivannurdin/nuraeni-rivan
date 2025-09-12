<template>
    <div>
        <button
        @click="toggleMusic"
        class="fixed bottom-4 right-4 md:right-8 z-50 bg-stone-700 text-white text-sm   
         md:text-base w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-stone-900 transition"
        >
        <i :class="isPlaying ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'"></i>
        </button>
        <audio ref="audioRef" loop>
        <source src="../assets/music/Barasuara - Terbuang Dalam Waktu.mp3" type="audio/mpeg" />
        </audio>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";

const isPlaying = ref(false);
const audioRef = ref(null);

onMounted(() => {
if (audioRef.value) {
    audioRef.value.volume = 0;
    audioRef.value.play().catch(() => {
    console.log("Autoplay diblokir, tunggu interaksi user.");
    });
}
});

function toggleMusic() {
if (!audioRef.value) return;

if (!isPlaying.value) {
    // aktifkan suara
    audioRef.value.volume = 1;
    audioRef.value.play();
} else {
    audioRef.value.pause();
}

isPlaying.value = !isPlaying.value;
}
</script>
  