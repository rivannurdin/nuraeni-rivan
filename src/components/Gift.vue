<template>
  <section
    id="gift"
    class="py-16 py:8 px-6 text-center bg-black text-white"
  >
    <h2 class="text-2xl md:text-4xl font-bold mb-6 animate-fade-in">
      Kirim Hadiah (Wedding Gift)
    </h2>

    <p class="max-w-xl md:max-w-3xl mx-auto md:text-lg font-light mb-10 animate-fade-in-delay">
      Doa restu merupakan hadiah terindah bagi kami. Jika berkenan memberi tanda kasih, dapat disampaikan melalui rekening atau alamat berikut:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto animate-fade-in-delay">
    
      <div class="border border-white/10 rounded-2xl shadow-lg">
        <!-- Header toggle -->
        <button 
          @click="isBankOpen = !isBankOpen"
          class="w-full p-4 md:p-6 flex justify-between items-center md:cursor-default"
        >
          <h3 class="text-lg md:text-xl font-semibold">Transfer Bank</h3>
          <!-- ikon panah hanya mobile -->
          <span class="md:hidden">{{ isBankOpen ? '−' : '+' }}</span>
        </button>

        <!-- Konten -->
        <div 
          class="px-6 pb-6 transition-all duration-500"
          :class="isBankOpen ? 'block' : 'hidden md:block'"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <p class="mb-1 font-medium">Bank BRI</p>
              <p class="mb-1 font-semibold">346901080776535</p>
              <p class="mb-4">a.n. Nuraeni Astuti</p>
              <button
                @click="copyToClipboard('346901080776535')"
                class="px-4 py-2 bg-white text-black mb-4 rounded-full text-xs font-semibold hover:bg-stone-200 transition"
              >
                Salin No. Rekening
              </button>
            </div>
            <div>
              <p class="mb-1 font-medium">Bank BCA</p>
              <p class="mb-1 font-semibold">8320588520</p>
              <p class="mb-4">a.n. Rivan Nurdin</p>
              <button
                @click="copyToClipboard('8320588520')"
                class="px-4 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-stone-200 transition"
              >
                Salin No. Rekening
              </button>
            </div>
          </div>
        </div>
      </div>

    <!-- Alamat Rumah -->
    <div class="border border-white/10 rounded-xl shadow-lg">
      <!-- Header toggle -->
      <button 
        @click="isAlamatOpen = !isAlamatOpen"
        class="w-full text-left md:text-center p-4 md:p-6 flex justify-between items-center md:cursor-default"
      >
        <h3 class="text-lg md:text-xl font-semibold">Alamat Rumah</h3>
        <!-- ikon panah hanya mobile -->
        <span class="md:hidden">{{ isAlamatOpen ? '−' : '+' }}</span>
      </button>

      <!-- Konten -->
      <div 
        class="px-6 pb-6 transition-all duration-500 text-left"
        :class="isAlamatOpen ? 'block' : 'hidden md:block'"
      >
        <p class="mb-4">KP. Ciwidara RT 05 RW 14, Desa/Kecamatan Pangalengan, Kabupaten Bandung</p>
        <hr class="p-1 border-white/10">
        <p class="mb-4">Sekemerak No.131 RT 04 RW18, Cibeunying, Cimenyan, Kabupaten Bandung</p>
      </div>
    </div>

  </div>    

    <!-- Alert Copy -->
    <transition name="fade">
      <p
        v-if="copied"
        class="mt-8 text-green-400 font-medium animate-fade-in"
      >
        ✅ {{ copied }} berhasil disalin!
      </p>
    </transition>
  </section>
</template>
  
<script setup>
import { ref } from "vue";

const isBankOpen = ref(false);
const isAlamatOpen = ref(false);
const copied = ref("");

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    copied.value = text;
    setTimeout(() => (copied.value = ""), 2000);
  });
}
</script>
  