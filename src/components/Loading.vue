<template>
    <div>
        <div
        v-if="isLoading"
        class="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white"
        >
        <img
            src="../assets/img/Logo.png"
            alt="Logo"
            class="w-16 h-16 md:w-20 md:h-20 animate-pulse"
        />
        </div>

        <div v-show="!isLoading">
        <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
    window.addEventListener("load", () => {
        // Kasih delay dikit biar smooth
        setTimeout(() => {
        isLoading.value = false;
        }, 800);
    });
});
</script>
  