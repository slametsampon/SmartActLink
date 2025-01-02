import getHome from '../utils/getHome.js';
export default function HistoryContent() {
  // Akses variabel environment
  const HOME = getHome();
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <div class="p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Logs & History</h2>
      
      <!-- Filter Section -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <select class="form-select" id="deviceFilter">
          <option value="">Pilih Perangkat</option>
        </select>

        <input type="date" id="startDate" class="form-input">
        <input type="date" id="endDate" class="form-input">

        <select class="form-select" id="activityFilter">
          <option value="all">Semua Aktivitas</option>
          <option value="manual">Manual Override</option>
          <option value="on_off">Perangkat Hidup/Mati</option>
          <option value="data">Data Sensor</option>
        </select>

        <button id="searchBtn" class="btn-primary">Cari</button>
        <button id="resetBtn" class="btn-secondary">Reset</button>
      </div>

      <!-- Table Section -->
      <table class="table-auto w-full border-collapse">
        <thead class="bg-gray-200">
          <tr>
            <th class="px-4 py-2">Waktu</th>
            <th class="px-4 py-2">Perangkat</th>
            <th class="px-4 py-2">Aktivitas</th>
            <th class="px-4 py-2">Data</th>
          </tr>
        </thead>
        <tbody id="logsTable" class="text-gray-700">
          <!-- Data akan dimuat di sini -->
        </tbody>
      </table>

      <!-- Export Button -->
      <div class="mt-6">
        <button id="exportCsv" class="btn-success">Ekspor CSV</button>
        <button id="exportPdf" class="btn-warning">Ekspor PDF</button>
      </div>
    </div>
  `;
  return main;
}
