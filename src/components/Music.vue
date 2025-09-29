<template>
    <!-- Tombol toggle musik -->
    <button
        @click="toggleMusic"
        class="fixed bottom-10 right-6 md:bottom-14 md:right-14 z-50 bg-stone-800 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-stone-600 transition opacity-80 text"
    >
    <i :class="isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-music'"></i>
    </button>


    <!-- Audio -->
    <audio ref="audioRef" loop>
        <source src="../assets/music/Barasuara - Terbuang Dalam Waktu.mp3" type="audio/mpeg" />
    </audio>
</template>

<script setup>
import { ref, onMounted } from "vue";

const audioRef = ref(null);
const isPlaying = ref(false);

function toggleMusic() {
if (!audioRef.value) return;

if (!isPlaying.value) {
    audioRef.value.volume = 1;
    audioRef.value.play().then(() => {
    isPlaying.value = true;
    }).catch(err => {
    console.log("Gagal play:", err);
    });
} else {
    audioRef.value.pause();
    isPlaying.value = false;
}
}

// 👉 kalau mau auto-play setelah tombol "Lihat Undangan"
onMounted(() => {
const btn = document.getElementById("open-invitation");
if (btn) {
    btn.addEventListener("click", () => {
    if (audioRef.value && !isPlaying.value) {
        audioRef.value.play().then(() => {
        isPlaying.value = true;
        });
    }
    }, { once: true });
}
});
</script>