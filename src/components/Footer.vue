<template>
  <footer id="closing" class="bg-black text-white text-center border-t border-white/10">
    <div class="py-6 px-6 text-sm text-white/60">
      <!-- 🔒 Trigger klik -->
      <p @click="toggleRSVP" class="cursor-pointer hover:text-white transition">
        © 2025 Designed & Developed by
      </p>
      <p>
        <a href="https://rivannurdin.github.io" target="_blank" class="text-white">Rivan Nurdin</a> 😎
      </p>
    </div>

    <!-- 🔽 Section Rahasia -->
    <transition name="fade">
      <div v-if="showRSVP" class="max-w-5xl mx-auto px-4 pb-10 space-y-10">
        
        <!-- 🎯 Form Generate Link -->
        <div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h3 class="text-2xl mb-4 font-semibold">Generate Link Undangan</h3>
          <input
            v-model="guestName"
            type="text"
            placeholder="Tulis nama tamu undangan..."
            class="w-full px-4 py-3 mb-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-stone-400"
          />
          <div v-if="guestName" class="flex items-center gap-2">
            <input
              type="text"
              :value="generatedLink"
              readonly
              class="w-full px-3 py-2 rounded-lg bg-black/30 text-white text-sm"
            />
            <button
              @click="copyLink"
              class="px-4 py-2 bg-stone-600 text-white rounded-lg text-sm hover:bg-stone-800 transition"
            >
              Salin
            </button>
          </div>
        </div>

        <!-- 📋 Daftar Tamu -->
        <DaftarTamu />
      </div>
    </transition>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import DaftarTamu from "../pages/RsvpList.vue";

const showRSVP = ref(false);
const guestName = ref("");

function toggleRSVP() {
  showRSVP.value = !showRSVP.value;
}

const generatedLink = computed(() => {
  const base = "https://rivannurdin.github.io/nuraeni-rivan";
  if (!guestName.value.trim()) return "";
  return `${base}/?to=${encodeURIComponent(guestName.value.trim())}`;
});

function copyLink() {
  navigator.clipboard.writeText(generatedLink.value);
  alert("Link berhasil disalin! 🎉");
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
