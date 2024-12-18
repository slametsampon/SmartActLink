import GLOBAL_ENV from '../config.dev.js';
export default function AboutContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- Overlay Global -->
    <div class="min-h-screen text-gray-800">
      
      <!-- Header (Sudah Ada) -->
      <section class="block text-center py-12">
        <h1 class="text-4xl font-bold">SmartActLink: Solusi IoT Inovatif</h1>
        <p class="mt-3 text-lg">Menghubungkan Teknologi dan Efisiensi dalam Satu Platform</p>
      </section>

      <section class="py-8">
        <p class="mt-4 first-line:uppercase first-line:tracking-widest">SmartActLink adalah perangkat IoT berbasis ESP32-C3 Super Mini yang dirancang untuk kendali fleksibel dan mandiri pada berbagai aktuator.</p>
      </section>
      <section class="py-8 bg-gray-50">
        <h2 class="text-2xl font-semibold">Keunggulan SmartActLink</h2>
        <ul class="mt-6 space-y-4">
          <li>Mandiri dengan Energi Panel Surya</li>
          <li>Akses Langsung via Smartphone</li>
          <li>Kompatibilitas Universal</li>
          <li>Otomasi Berdasarkan Waktu</li>
          <li>Integrasi dengan SmartSenseLink</li>
          <li>Auto-Registrasi Cerdas</li>
        </ul>
      </section>
      <section class="py-8 bg-gray-50">
        <h2 class="text-2xl font-semibold">Aplikasi SmartActLink</h2>
        <ul class="mt-6 space-y-4">
          <li>Hortikultura: Kendali irigasi, pencahayaan, dan pemupukan</li>
          <li>Hidroponik: Pengaturan pompa air dan nutrisi</li>
          <li>Akuaponik: Manajemen kualitas air</li>
          <li>Akuakultur & RAS: Otomasi aerator dan filtrasi</li>
          <li>Industri & Laboratorium: Pengelolaan otomatis untuk riset</li>
        </ul>
      </section>
    </div>
  `;
  return main;
}
