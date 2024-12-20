import GLOBAL_ENV from './../config.dev.js';
export default function AboutContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- Overlay Global -->
    <div class="min-h-screen text-gray-800">
      
      <!-- Header (Sudah Ada) -->
      <section class="block text-center py-4 mb-3">
        <h1 class="text-2xl">Smart<span class="font-bold italic text-orange-600">Act</span>Link: Solusi IoT Inovatif</h1>
        <p class="mt-2 font-thin italic">Menghubungkan Teknologi dan Efisiensi dalam Satu Platform</p>
      </section>

      <section class="p-3 bg-green-50 rounded-xl">
        <p class="text-left first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-blue-700
          first-letter:mr-0 first-letter:float-left">Smart<span class="font-bold italic text-orange-600">~Act~</span>Link adalah perangkat IoT canggih yang memanfaatkan platform ESP32-C3 Super Mini untuk memberikan kendali yang fleksibel dan mandiri pada berbagai jenis aktuator. Dengan teknologi ini, pengguna dapat mengontrol perangkat mereka dari jarak jauh tanpa bergantung pada infrastruktur internet yang kompleks. SmartActLink dirancang untuk memenuhi kebutuhan otomasi yang luas, mulai dari pengelolaan sistem pertanian, industri, hingga aplikasi penelitian laboratorium.</p>
      </section>
      <section class="p-3 bg-orange-50 mt-6 rounded-xl text-left">
        <h2 class="text-2xl font-semibold">Keunggulan Smart<span class="font-bold italic text-orange-600">Act</span>Link</h2>
        <ul class="mt-3 space-y-2">
          <li>Mandiri dengan Energi Panel Surya</li>
          <li>Akses Langsung via Smartphone</li>
          <li>Kompatibilitas Universal</li>
          <li>Otomasi Berdasarkan Waktu</li>
          <li>Integrasi dengan SmartSenseLink</li>
          <li>Auto-Registrasi Cerdas</li>
        </ul>
      </section>
      <section class="p-3 rounded-xl bg-gray-50 mt-6 text-left">
        <h2 class="text-2xl font-semibold">Aplikasi Smart<span class="font-bold italic text-orange-600">Act</span>Link</h2>
        <ul class="mt-6 space-y-2">
          <li><b>Hortikultura:</b> Kendali irigasi, pencahayaan, dan pemupukan</li>
          <li><b>Hidroponik:</b> Pengaturan pompa air dan nutrisi</li>
          <li><b>Akuaponik:</b> Manajemen kualitas air</li>
          <li><b>Akuakultur & RAS:</b> Otomasi aerator dan filtrasi</li>
          <li><b>Industri & Laboratorium:</b> Pengelolaan otomatis untuk riset</li>
        </ul>
      </section>
    </div>
  `;
  return main;
}
