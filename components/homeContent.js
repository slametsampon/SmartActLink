import GLOBAL_ENV from '../config.dev.js';
export default function HomeContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- Overlay Global -->
    <div class="min-h-screen text-white">
      
      <!-- Header (Sudah Ada) -->
      <header class="pt-0">
        <h1 class="text-2xl mb-3">Smart<span class="italic font-bold text-orange-600">Act</span>Link</h1>
      </header>

      <section id="hero">
          <div class="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
              <h1 class="text-xl font-bold mb-4 italic">IoT Mandiri untuk Otomasi Aktuator di Mana Saja</h1>
              <p class="text-lg md:text-xl mb-6 font-thin">
                  Kendalikan berbagai perangkat Anda dengan SmartActLink. Tanpa WiFi eksternal. 
                  Tanpa batasan lokasi. Solusi berbasis energi surya untuk otomatisasi cerdas.
              </p>
          </div>
      </section>
      <section id="features" class="p-6 bg-green-50 bg-opacity-80 rounded-lg shadow-lg">
          <div class="container mx-auto">
              <h2 class="text-2xl font-bold text-center text-green-600">Keunggulan Smart<span class="italic font-bold text-orange-600">Act</span>Link</h2>
              <p class="text-center text-gray-600">Rasakan teknologi IoT yang bekerja untuk Anda.</p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                  <div class="p-3 bg-white shadow-md rounded-lg text-center">
                      <img src="${HOME}public/images/solar-panel.png" alt="Solar" class="w-16 mx-auto">
                      <h3 class="font-semibold text-xl text-gray-600">Mandiri dengan Panel Surya</h3>
                      <p class="text-gray-600">Operasional tanpa jaringan listrik.</p>
                  </div>

                  <div class="p-3 bg-white shadow-md rounded-lg text-center">
                      <img src="${HOME}public/images/smartpone.png" alt="Smartphone" class="w-16 mx-auto mb-4">
                      <h3 class="font-semibold text-xl text-gray-600">Akses via Smartphone</h3>
                      <p class="text-gray-600">Koneksi langsung tanpa WiFi eksternal.</p>
                  </div>

                  <div class="p-3 bg-white shadow-md rounded-lg text-center">
                      <img src="${HOME}public/images/industrial.png" alt="Devices" class="w-16 mx-auto mb-4">
                      <h3 class="font-semibold text-xl text-gray-600">Kompatibel dengan Berbagai Peralatan</h3>
                      <p class="text-gray-600">Pompa, lampu, pintu otomatis, dan lainnya.</p>
                  </div>
              </div>
          </div>
      </section>

      <!-- Call to Action -->
      <section class="text-center mt-3 text-gray-700 bg-blue-100 bg-opacity-65 rounded-lg p-3">
        <h2 class="font-extrabold">Siap untuk Memaksimalkan Perangkat Anda?</h2>
        <p class="font-extralight mb-3 italic">Daftar sekarang dan optimalkan hasil pertanian Anda.</p>
        <div class="md:mx-8 flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0">
            <a href="#features" class="block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg">Pelajari Lebih Lanjut</a>
            <a href="#purchase" class="block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg">Dapatkan Sekarang</a>
        </div>
      </section>

    </div>
  `;
  return main;
}
