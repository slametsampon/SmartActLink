import GLOBAL_ENV from '../config.dev.js';
export default function ConfigContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- App Container -->
    <div id="app" class="min-h-screen flex flex-col items-center">
        <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
            <h1 class="text-2xl font-bold mb-4">Smart<span class="text-orange-600 italic">Act</span>Link Configuration</h1>
            <div id="wizard" class="space-y-6 mt-9">
                <!-- Step 1: Informasi Umum -->
                <div id="step-info" class="wizard-step">
                    <h2 class="text-xl font-semibold">Informasi Umum</h2>
                    <label class="block mt-4 text-left">
                        <span class="text-gray-900 font-bold">Nama Perangkat</span>
                        <input type="text" id="deviceName" class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Masukkan nama perangkat">
                    </label>
                    <label class="block mt-4 text-left">
                        <span class="text-gray-900 font-bold">Lokasi</span>
                        <input type="text" id="deviceLocation" class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Masukkan lokasi perangkat">
                    </label>
                    <label class="block mt-4 text-left">
                        <span class="text-gray-900 font-bold">Jenis</span>
                        <input type="text" id="deviceType" class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Masukkan jenis perangkat (Pompa, Solenoid, Lampu)">
                    </label>
                </div>
                <!-- Navigation Buttons -->
                <div class="flex justify-between mt-6">
                    <button id="prevBtn" class="hidden bg-green-600 px-4 py-2 rounded-md">Sebelumnya</button>
                    <button id="nextBtn" class="bg-blue-500 text-white px-4 py-2 rounded-md">Berikutnya</button>
                </div>
            </div>
        </div>
    </div>
  `;
  return main;
}
