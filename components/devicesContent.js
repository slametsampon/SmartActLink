export default function DevicesContent() {
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
          <th class="p-4">Tagname</th>
          <th class="p-4">Type</th>
          <th class="p-4">Link</th>
          <th class="p-4">Aksi</th>
        </tr>
      </thead>
      <tbody id="deviceListId"></tbody>
    </table>
    
    <!-- Modal -->
    <div
      id="modal"
      class="relative z-10 hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
    <!-- Background backdrop -->
    <div
      id="backdrop"
      class="fixed inset-0 bg-gray-500/75 transition-opacity"
      aria-hidden="true"
    ></div>
  `;
  return main;
}
