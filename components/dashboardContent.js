import GLOBAL_ENV from '../config.dev.js';
export default function DashboardContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 rounded-xl text-center text-xl font-bold">Smart<spa class="text-orange-600 italic">Act</spa>Link Dashboard</header>

    <!-- Main Content -->
    <div class="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Device Info Widget -->
        <div class="bg-blue-50 shadow-md rounded-lg p-3 mb-3">
            <h2 class="text-lg font-bold">Peralatan</h2>
            <p><strong>Nama:</strong> Pompa Air 1</p>
            <p><strong>Tipe:</strong> Pompa</p>
            <p><strong>Status Koneksi:</strong> <span id="device-status" class="bg-red-500 text-white px-2 py-1 rounded-xl">OFF</span></p>
            <button id="toggle-btn" onclick="toggleDevice()" class="mt-4 bg-blue-600 hover:bg-blue-800 hover:font-bold text-white px-4 py-2 rounded-3xl">Turn ON</button>
        </div>

        <!-- Sensor Data Widget -->
        <div class="bg-green-100 shadow-md rounded-lg p-3">
            <h2 class="text-lg font-bold">Data Sensor</h2>
            <canvas id="sensor-chart" class="mt-4"></canvas>
        </div>

        <!-- Log Activity Widget -->
        <div class="bg-white shadow-md rounded-lg p-6 col-span-1 md:col-span-2">
            <h2 class="text-lg font-bold">Log Aktivitas</h2>
            <ul id="log-list" class="list-disc ml-6">
                <li>Perangkat diaktifkan pada 12:00</li>
                <li>Perangkat dimatikan pada 12:30</li>
            </ul>
        </div>
    </div>
  `;
  return main;
}
