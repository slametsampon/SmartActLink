import GLOBAL_ENV from './../config.dev.js';
export default function DevicesContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <h1 class="text-2xl font-bold mb-6">Manajemen Perangkat</h1>

    <!-- Actions -->
    <div class="mb-4 flex justify-between items-center">
      <button id="addDevice" class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Tambah Perangkat</button>
      <input type="text" id="search" placeholder="Cari perangkat..." class="border px-4 py-2 rounded w-1/3">
    </div>

    <!-- Device Table -->
    <table class="table-auto w-full text-left">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-4">Nama Perangkat</th>
          <th class="p-4">Jenis</th>
          <th class="p-4">Status</th>
          <th class="p-4">Aksi</th>
        </tr>
      </thead>
      <tbody id="deviceList"></tbody>
    </table>
  `;
  return main;
}
