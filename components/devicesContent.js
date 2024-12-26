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
      <tbody id="deviceList"></tbody>
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

    <!-- Modal content -->
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-3 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  class="text-base font-semibold text-gray-900"
                  id="modal-title"
                >
                  Detail Peralatan
                </h3>
                <div id="detail-device" class="mt-2"></div>
              </div>
            </div>
          </div>
          <div
            class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
          >
            <button
              id="cancelButton"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-800 sm:mt-0 sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  return main;
}
